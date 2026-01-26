"use client"

import { useEffect, useState } from "react"
import { Loader2, Users, RefreshCw } from "lucide-react"
import { format } from "date-fns"
import { toast } from "sonner"

interface DemoRequest {
    _id: string
    email: string
    name?: string
    company?: string
    source: string
    status: "pending" | "contacted" | "scheduled" | "completed"
    createdAt: string
}

interface Pagination {
    page: number
    limit: number
    total: number
    pages: number
}

export default function DemosPage() {
    const [demos, setDemos] = useState<DemoRequest[]>([])
    const [pagination, setPagination] = useState<Pagination | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [statusFilter, setStatusFilter] = useState<string>("")

    useEffect(() => {
        fetchDemos()
    }, [statusFilter])

    const fetchDemos = async (page = 1) => {
        setIsLoading(true)
        try {
            const params = new URLSearchParams({ page: page.toString(), limit: "20" })
            if (statusFilter) params.set("status", statusFilter)

            const response = await fetch(`/api/admin/demos?${params}`)
            if (!response.ok) throw new Error("Failed to fetch")

            const data = await response.json()
            setDemos(data.demos)
            setPagination(data.pagination)
        } catch {
            toast.error("Failed to load demo requests")
        } finally {
            setIsLoading(false)
        }
    }

    const updateStatus = async (id: string, status: string) => {
        try {
            const response = await fetch("/api/admin/demos", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, status }),
            })

            if (!response.ok) throw new Error("Failed to update")

            setDemos(demos.map((d) => (d._id === id ? { ...d, status: status as DemoRequest["status"] } : d)))
            toast.success("Status updated")
        } catch {
            toast.error("Failed to update status")
        }
    }

    const sourceLabels: Record<string, string> = {
        homepage: "Homepage",
        services: "Services Page",
        dealership: "Dealership Page",
        footer: "Footer",
        other: "Other",
    }

    const statusColors: Record<string, string> = {
        pending: "bg-yellow-500/20 text-yellow-400",
        contacted: "bg-blue-500/20 text-blue-400",
        scheduled: "bg-purple-500/20 text-purple-400",
        completed: "bg-green-500/20 text-green-400",
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Demo Requests</h1>
                    <p className="text-gray-400 mt-1">Manage demo booking requests</p>
                </div>
                <button
                    onClick={() => fetchDemos()}
                    className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white transition-colors"
                >
                    <RefreshCw className="w-5 h-5" />
                </button>
            </div>

            {/* Filters */}
            <div className="flex gap-4">
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-gray-600"
                >
                    <option value="">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="contacted">Contacted</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="completed">Completed</option>
                </select>
            </div>

            {isLoading ? (
                <div className="flex items-center justify-center h-64">
                    <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                </div>
            ) : demos.length === 0 ? (
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 text-center">
                    <Users className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">No demo requests found</p>
                </div>
            ) : (
                <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-800/50">
                                <tr>
                                    <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Contact</th>
                                    <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Source</th>
                                    <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Status</th>
                                    <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Date</th>
                                    <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800">
                                {demos.map((demo) => (
                                    <tr key={demo._id} className="hover:bg-gray-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <a href={`mailto:${demo.email}`} className="text-blue-400 hover:underline font-medium">
                                                {demo.email}
                                            </a>
                                            {demo.name && <p className="text-gray-400 text-sm">{demo.name}</p>}
                                            {demo.company && <p className="text-gray-500 text-xs">{demo.company}</p>}
                                        </td>
                                        <td className="px-6 py-4 text-gray-300 text-sm">
                                            {sourceLabels[demo.source] || demo.source}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-block px-2 py-1 rounded text-xs ${statusColors[demo.status]}`}>
                                                {demo.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-400 text-sm">
                                            {format(new Date(demo.createdAt), "MMM d, yyyy h:mm a")}
                                        </td>
                                        <td className="px-6 py-4">
                                            <select
                                                value={demo.status}
                                                onChange={(e) => updateStatus(demo._id, e.target.value)}
                                                className="px-3 py-1 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none"
                                            >
                                                <option value="pending">Pending</option>
                                                <option value="contacted">Contacted</option>
                                                <option value="scheduled">Scheduled</option>
                                                <option value="completed">Completed</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    {pagination && pagination.pages > 1 && (
                        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-800">
                            <p className="text-gray-400 text-sm">
                                Showing {(pagination.page - 1) * pagination.limit + 1} to{" "}
                                {Math.min(pagination.page * pagination.limit, pagination.total)} of {pagination.total}
                            </p>
                            <div className="flex gap-2">
                                {Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => fetchDemos(page)}
                                        className={`px-3 py-1 rounded text-sm ${page === pagination.page
                                                ? "bg-white text-black"
                                                : "bg-gray-800 text-gray-400 hover:text-white"
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
