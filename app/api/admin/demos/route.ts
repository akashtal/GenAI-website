import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { auth } from '@/lib/auth';
import connectDB from '@/lib/db';
import DemoRequest from '@/models/DemoRequest';

export async function GET(request: NextRequest) {
    try {
        const session = await auth();

        if (!session?.user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await connectDB();

        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status');
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '20');
        const skip = (page - 1) * limit;

        const query = status ? { status } : {};

        const [demos, total] = await Promise.all([
            DemoRequest.find(query)
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit)
                .lean(),
            DemoRequest.countDocuments(query),
        ]);

        return NextResponse.json({
            demos,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        console.error('Admin demos error:', error);
        return NextResponse.json({ error: 'Failed to fetch demo requests' }, { status: 500 });
    }
}

export async function PATCH(request: NextRequest) {
    try {
        const session = await auth();

        if (!session?.user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();
        const { id, status } = body;

        if (!id || !status || !['pending', 'contacted', 'scheduled', 'completed'].includes(status)) {
            return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
        }

        await connectDB();

        const demo = await DemoRequest.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!demo) {
            return NextResponse.json({ error: 'Demo request not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, demo });
    } catch (error) {
        console.error('Admin demos update error:', error);
        return NextResponse.json({ error: 'Failed to update demo request' }, { status: 500 });
    }
}
