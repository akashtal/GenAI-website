import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { auth } from '@/lib/auth';
import connectDB from '@/lib/db';
import Contact from '@/models/Contact';
import DemoRequest from '@/models/DemoRequest';
import Newsletter from '@/models/Newsletter';

export async function GET() {
    try {
        const session = await auth();

        if (!session?.user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await connectDB();

        const [
            totalContacts,
            newContacts,
            totalDemos,
            pendingDemos,
            totalSubscribers,
            activeSubscribers,
            recentContacts,
            recentDemos,
        ] = await Promise.all([
            Contact.countDocuments(),
            Contact.countDocuments({ status: 'new' }),
            DemoRequest.countDocuments(),
            DemoRequest.countDocuments({ status: 'pending' }),
            Newsletter.countDocuments(),
            Newsletter.countDocuments({ isActive: true }),
            Contact.find().sort({ createdAt: -1 }).limit(5).lean(),
            DemoRequest.find().sort({ createdAt: -1 }).limit(5).lean(),
        ]);

        return NextResponse.json({
            stats: {
                contacts: { total: totalContacts, new: newContacts },
                demos: { total: totalDemos, pending: pendingDemos },
                newsletter: { total: totalSubscribers, active: activeSubscribers },
            },
            recent: {
                contacts: recentContacts,
                demos: recentDemos,
            },
        });
    } catch (error) {
        console.error('Admin stats error:', error);
        return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
    }
}
