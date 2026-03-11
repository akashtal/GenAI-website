import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmail, getContactNotificationEmail, getContactConfirmationEmail } from '@/lib/email';

const contactSchema = z.object({
    name: z.string().min(1, 'Name is required').max(100),
    email: z.string().email('Invalid email address'),
    phone: z.string().max(20).optional(),
    company: z.string().max(100).optional(),
    service: z.enum(['', 'software', 'mobile', 'marketing', 'design', 'cloud', 'other']).optional(),
    budget: z.enum(['', '5k-10k', '10k-25k', '25k-50k', '50k-100k', '100k+']).optional(),
    message: z.string().min(1, 'Message is required').max(5000),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate input
        const validationResult = contactSchema.safeParse(body);
        if (!validationResult.success) {
            return NextResponse.json(
                { error: 'Validation failed', details: validationResult.error.flatten() },
                { status: 400 }
            );
        }

        const data = validationResult.data;

        // Send notification email to admin
        const adminEmail = process.env.ADMIN_EMAIL;
        if (adminEmail) {
            await sendEmail({
                to: adminEmail,
                subject: `New Contact Form: ${data.name}`,
                html: getContactNotificationEmail(data),
                replyTo: data.email,
            });
        }

        // Send confirmation email to user
        await sendEmail({
            to: data.email,
            subject: 'Thank you for contacting GenAI Digital Solutions',
            html: getContactConfirmationEmail(data.name),
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Thank you! Your message has been sent successfully.',
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to submit contact form. Please try again.' },
            { status: 500 }
        );
    }
}
