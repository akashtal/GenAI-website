"use client"

import { useEffect, useState } from "react"
import { Loader2, Mail, RefreshCw } from "lucide-react"
import { format } from "date-fns"
import { toast } from "sonner"

interface Subscriber {
    _id: string
    email: string
    isActive: boolean
    subscribedAt: string
    unsubscribedAt?: string
}

export default function NewsletterPage() {
    const [subscribers, setSubscribers] = useState<Subscriber[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [activeFilter, setActiveFilter] = useState<string>("")
    const [stats, setStats] = useState({ total: 0, active: 0 })

    useEffect(() => {
        fetchSubscribers()
    }, [activeFilter])

    const fetchSubscribers = async () => {
        setIsLoading(true)
        try {
            const params = new URLSearchParams()
            if (activeFilter) params.set("active", activeFilter)

            const response = await fetch(`/api/admin/newsletter?${params}`)
            if (!response.ok) throw new Error("Failed to fetch")

            const data = await response.json()
            setSubscribers(data.subscribers || [])
            setStats(data.stats || { total: 0, active: 0 })
        } catch {
            toast.error("Failed to load subscribers")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Newsletter Subscribers</h1>
                    <p className="text-gray-400 mt-1">
                        {stats.active} active of {stats.total} total subscribers
                    </p>
                </div>
                <button
                    onClick={fetchSubscribers}
                    className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white transition-colors"
                >
                    <RefreshCw className="w-5 h-5" />
                </button>
            </div>

            {/* Filters */}
            <div className="flex gap-4">
                <select
                    value={activeFilter}
                    onChange={(e) => setActiveFilter(e.target.value)}
                    className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-gray-600"
                >
                    <option value="">All Subscribers</option>
                    <option value="true">Active Only</option>
                    <option value="false">Inactive Only</option>
                </select>
            </div>

            {isLoading ? (
                <div className="flex items-center justify-center h-64">
                    <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                </div>
            ) : subscribers.length === 0 ? (
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 text-center">
                    <Mail className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">No subscribers found</p>
                </div>
            ) : (
                <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-800/50">
                                <tr>
                                    <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Email</th>
                                    <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Status</th>
                                    <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Subscribed</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800">
                                {subscribers.map((subscriber) => (
                                    <tr key={subscriber._id} className="hover:bg-gray-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <a href={`mailto:${subscriber.email}`} className="text-blue-400 hover:underline">
                                                {subscriber.email}
                                            </a>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-block px-2 py-1 rounded text-xs ${subscriber.isActive
                                                        ? "bg-green-500/20 text-green-400"
                                                        : "bg-gray-500/20 text-gray-400"
                                                    }`}
                                            >
                                                {subscriber.isActive ? "Active" : "Inactive"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-400 text-sm">
                                            {format(new Date(subscriber.subscribedAt), "MMM d, yyyy")}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    )
}
