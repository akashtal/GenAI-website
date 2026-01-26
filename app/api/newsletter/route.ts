import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import connectDB from '@/lib/db';
import Newsletter from '@/models/Newsletter';

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

        // Connect to database
        await connectDB();

        // Check if already subscribed
        const existingSubscriber = await Newsletter.findOne({ email });

        if (existingSubscriber) {
            if (existingSubscriber.isActive) {
                return NextResponse.json(
                    {
                        success: true,
                        message: 'You\'re already subscribed to our newsletter!',
                    },
                    { status: 200 }
                );
            } else {
                // Reactivate subscription
                existingSubscriber.isActive = true;
                existingSubscriber.subscribedAt = new Date();
                existingSubscriber.unsubscribedAt = undefined;
                await existingSubscriber.save();

                return NextResponse.json(
                    {
                        success: true,
                        message: 'Welcome back! Your subscription has been reactivated.',
                    },
                    { status: 200 }
                );
            }
        }

        // Create new subscriber
        await Newsletter.create({
            email,
            isActive: true,
            subscribedAt: new Date(),
        });

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
