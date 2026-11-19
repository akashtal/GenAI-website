import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmail, getContactNotificationEmail, getContactConfirmationEmail } from '@/lib/email';

const contactSchema = z
    .object({
        name: z.string().trim().min(1, 'Name is required').max(100),
        email: z.string().trim().email('Invalid email address').optional().or(z.literal('')),
        phone: z.string().trim().max(25).optional(),
        company: z.string().trim().max(100).optional(),
        service: z.string().trim().max(60).optional(),
        budget: z.string().trim().max(60).optional(),
        message: z.string().trim().max(5000).optional(),
        source: z.string().trim().max(40).optional(),
        // Honeypot: real users never fill this hidden field
        website: z.string().max(0).optional(),
    })
    .refine((d) => Boolean(d.email) || Boolean(d.phone && d.phone.replace(/\D/g, '').length >= 7), {
        message: 'Please share an email address or a phone / WhatsApp number',
        path: ['email'],
    });

async function saveLead(data: Record<string, unknown>) {
    if (!process.env.MONGODB_URI) return false;
    try {
        const { connectDB } = await import('@/lib/db');
        const { default: Contact } = await import('@/models/Contact');
        await connectDB();
        await Contact.create(data);
        return true;
    } catch (error) {
        console.error('Lead DB save failed:', error);
        return false;
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const validationResult = contactSchema.safeParse(body);
        if (!validationResult.success) {
            const first = validationResult.error.issues[0]?.message;
            return NextResponse.json(
                { error: first || 'Please check the form and try again.', details: validationResult.error.flatten() },
                { status: 400 }
            );
        }

        const { website: _honeypot, ...data } = validationResult.data;
        const lead = {
            ...data,
            email: data.email || undefined,
            message: data.message || '(no message provided)',
            source: data.source || 'contact-page',
        };

        // 1. Persist the lead (if a database is configured) so nothing is ever lost.
        const saved = await saveLead(lead);

        // 2. Notify the team.
        const adminEmail = process.env.ADMIN_EMAIL;
        let notified = false;
        if (adminEmail) {
            const result = await sendEmail({
                to: adminEmail,
                subject: `New lead (${lead.source}): ${lead.name}${lead.service ? ` – ${lead.service}` : ''}`,
                html: getContactNotificationEmail(lead),
                replyTo: lead.email,
            });
            notified = result.success;
        }

        // If the lead was neither stored nor delivered, tell the visitor so they can use another channel
        // instead of showing a false "sent" message and silently losing the enquiry.
        if (!saved && !notified) {
            // Full details logged so the enquiry can still be recovered from the hosting logs (e.g. Vercel → Logs).
            console.error('LEAD NOT DELIVERED – fix SMTP/MONGODB_URI. Lead:', JSON.stringify(lead));
            return NextResponse.json(
                { error: 'We could not send your message right now. Please reach us on WhatsApp or call us directly.' },
                { status: 502 }
            );
        }

        // 3. Confirmation to the visitor (best effort).
        if (lead.email) {
            await sendEmail({
                to: lead.email,
                subject: 'Thanks for contacting Gen AI Digital Solutions',
                html: getContactConfirmationEmail(lead.name),
            });
        }

        return NextResponse.json(
            { success: true, message: "Thank you! We've received your enquiry and will reply within 24 hours." },
            { status: 201 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to submit the form. Please try again or message us on WhatsApp.' },
            { status: 500 }
        );
    }
}
