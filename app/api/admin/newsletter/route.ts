import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { auth } from '@/lib/auth';
import connectDB from '@/lib/db';
import Newsletter from '@/models/Newsletter';

export async function GET(request: NextRequest) {
    try {
        const session = await auth();

        if (!session?.user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await connectDB();

        const { searchParams } = new URL(request.url);
        const activeParam = searchParams.get('active');

        let query = {};
        if (activeParam === 'true') {
            query = { isActive: true };
        } else if (activeParam === 'false') {
            query = { isActive: false };
        }

        const [subscribers, total, active] = await Promise.all([
            Newsletter.find(query).sort({ subscribedAt: -1 }).lean(),
            Newsletter.countDocuments(),
            Newsletter.countDocuments({ isActive: true }),
        ]);

        return NextResponse.json({
            subscribers,
            stats: { total, active },
        });
    } catch (error) {
        console.error('Admin newsletter error:', error);
        return NextResponse.json({ error: 'Failed to fetch subscribers' }, { status: 500 });
    }
}
