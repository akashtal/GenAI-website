import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmail, getDemoRequestEmail, getDemoConfirmationEmail } from '@/lib/email';

const demoSchema = z.object({
    email: z.string().email('Invalid email address'),
    name: z.string().max(100).optional(),
    company: z.string().max(100).optional(),
    source: z.enum(['homepage', 'services', 'dealership', 'footer', 'other']).default('homepage'),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate input
        const validationResult = demoSchema.safeParse(body);
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
                subject: `New Demo Request: ${data.email}`,
                html: getDemoRequestEmail(data.email, data.source),
                replyTo: data.email,
            });
        }

        // Send confirmation email to user
        await sendEmail({
            to: data.email,
            subject: 'Demo Request Received - GenAI Digital Solutions',
            html: getDemoConfirmationEmail(),
        });

        return NextResponse.json(
            {
                success: true,
                message: 'Demo request received! We\'ll contact you within 24-48 hours.',
                id: Date.now().toString(), // Mock ID since there's no DB
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('Demo request error:', error);
        return NextResponse.json(
            { error: 'Failed to submit demo request. Please try again.' },
            { status: 500 }
        );
    }
}
