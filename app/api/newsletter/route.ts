import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmail } from '@/lib/email';

const newsletterSchema = z.object({
    email: z.string().email('Invalid email address'),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate input
        const validationResult = newsletterSchema.safeParse(body);
        if (!validationResult.success) {
            return NextResponse.json(
                { error: 'Please enter a valid email address' },
                { status: 400 }
            );
        }

        const { email } = validationResult.data;

        // Send notification email to admin since we don't save to DB
        const adminEmail = process.env.ADMIN_EMAIL;
        if (adminEmail) {
            await sendEmail({
                to: adminEmail,
                subject: `New Newsletter Subscription: ${email}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                        <h2 style="color: #1a1a2e;">New Newsletter Subscriber!</h2>
                        <p>A new user has subscribed to your newsletter.</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    </div>
                `,
                replyTo: email,
            });
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Thank you for subscribing to our newsletter!',
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            { error: 'Failed to subscribe. Please try again.' },
            { status: 500 }
        );
    }
}
