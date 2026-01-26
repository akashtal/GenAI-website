"use client"

import { useEffect, useState } from "react"
import { MessageSquare, Users, Mail, TrendingUp, Loader2 } from "lucide-react"
import { format } from "date-fns"

interface Stats {
    contacts: { total: number; new: number }
    demos: { total: number; pending: number }
    newsletter: { total: number; active: number }
}

interface RecentItem {
    _id: string
    email: string
    name?: string
    createdAt: string
    status: string
}

interface DashboardData {
    stats: Stats
    recent: {
        contacts: RecentItem[]
        demos: RecentItem[]
    }
}

export default function AdminDashboard() {
    const [data, setData] = useState<DashboardData | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        fetchStats()
    }, [])

    const fetchStats = async () => {
        try {
            const response = await fetch("/api/admin/stats")
            if (!response.ok) throw new Error("Failed to fetch stats")
            const result = await response.json()
            setData(result)
        } catch {
            setError("Failed to load dashboard data")
        } finally {
            setIsLoading(false)
        }
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
            </div>
        )
    }

    if (error) {
        return (
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 text-center">
                <p className="text-red-400">{error}</p>
                <button
                    onClick={fetchStats}
                    className="mt-4 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
                >
                    Retry
                </button>
            </div>
        )
    }

    const statCards = [
        {
            label: "Total Contacts",
            value: data?.stats.contacts.total || 0,
            subValue: `${data?.stats.contacts.new || 0} new`,
            icon: MessageSquare,
            color: "bg-blue-500/10 text-blue-400",
        },
        {
            label: "Demo Requests",
            value: data?.stats.demos.total || 0,
            subValue: `${data?.stats.demos.pending || 0} pending`,
            icon: Users,
            color: "bg-green-500/10 text-green-400",
        },
        {
            label: "Newsletter Subscribers",
            value: data?.stats.newsletter.total || 0,
            subValue: `${data?.stats.newsletter.active || 0} active`,
            icon: Mail,
            color: "bg-purple-500/10 text-purple-400",
        },
        {
            label: "Conversion Rate",
            value: data?.stats.contacts.total
                ? `${Math.round((data.stats.demos.total / data.stats.contacts.total) * 100)}%`
                : "0%",
            subValue: "From contact to demo",
            icon: TrendingUp,
            color: "bg-orange-500/10 text-orange-400",
        },
    ]

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                <p className="text-gray-400 mt-1">Welcome back! Here&apos;s an overview of your website.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((stat) => (
                    <div
                        key={stat.label}
                        className="bg-gray-900 border border-gray-800 rounded-xl p-6"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-lg ${stat.color}`}>
                                <stat.icon className="w-5 h-5" />
                            </div>
                        </div>
                        <p className="text-3xl font-bold text-white">{stat.value}</p>
                        <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                        <p className="text-gray-500 text-xs mt-2">{stat.subValue}</p>
                    </div>
                ))}
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-6">
                {/* Recent Contacts */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <h2 className="text-lg font-semibold text-white mb-4">Recent Contacts</h2>
                    {data?.recent.contacts.length === 0 ? (
                        <p className="text-gray-500 text-center py-8">No contacts yet</p>
                    ) : (
                        <div className="space-y-4">
                            {data?.recent.contacts.map((contact) => (
                                <div
                                    key={contact._id}
                                    className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50"
                                >
                                    <div>
                                        <p className="text-white font-medium">{contact.name}</p>
                                        <p className="text-gray-400 text-sm">{contact.email}</p>
                                    </div>
                                    <div className="text-right">
                                        <span
                                            className={`inline-block px-2 py-1 rounded text-xs ${contact.status === "new"
                                                    ? "bg-blue-500/20 text-blue-400"
                                                    : contact.status === "read"
                                                        ? "bg-gray-500/20 text-gray-400"
                                                        : "bg-green-500/20 text-green-400"
                                                }`}
                                        >
                                            {contact.status}
                                        </span>
                                        <p className="text-gray-500 text-xs mt-1">
                                            {format(new Date(contact.createdAt), "MMM d, h:mm a")}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Recent Demo Requests */}
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <h2 className="text-lg font-semibold text-white mb-4">Recent Demo Requests</h2>
                    {data?.recent.demos.length === 0 ? (
                        <p className="text-gray-500 text-center py-8">No demo requests yet</p>
                    ) : (
                        <div className="space-y-4">
                            {data?.recent.demos.map((demo) => (
                                <div
                                    key={demo._id}
                                    className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50"
                                >
                                    <div>
                                        <p className="text-white font-medium">{demo.email}</p>
                                        <p className="text-gray-400 text-sm">{demo.name || "No name provided"}</p>
                                    </div>
                                    <div className="text-right">
                                        <span
                                            className={`inline-block px-2 py-1 rounded text-xs ${demo.status === "pending"
                                                    ? "bg-yellow-500/20 text-yellow-400"
                                                    : demo.status === "contacted"
                                                        ? "bg-blue-500/20 text-blue-400"
                                                        : "bg-green-500/20 text-green-400"
                                                }`}
                                        >
                                            {demo.status}
                                        </span>
                                        <p className="text-gray-500 text-xs mt-1">
                                            {format(new Date(demo.createdAt), "MMM d, h:mm a")}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
