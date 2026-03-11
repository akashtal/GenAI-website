"use client"

import { useEffect, useState } from "react"
import { Loader2, Mail, Eye, CheckCircle, RefreshCw } from "lucide-react"
import { format } from "date-fns"
import { toast } from "sonner"

interface Contact {
    _id: string
    name: string
    email: string
    company?: string
    service?: string
    budget?: string
    message: string
    status: "new" | "read" | "replied"
    createdAt: string
}

interface Pagination {
    page: number
    limit: number
    total: number
    pages: number
}

export default function ContactsPage() {
    const [contacts, setContacts] = useState<Contact[]>([])
    const [pagination, setPagination] = useState<Pagination | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
    const [statusFilter, setStatusFilter] = useState<string>("")

    useEffect(() => {
        fetchContacts()
    }, [statusFilter])

    const fetchContacts = async (page = 1) => {
        setIsLoading(true)
        try {
            const params = new URLSearchParams({ page: page.toString(), limit: "20" })
            if (statusFilter) params.set("status", statusFilter)

            const response = await fetch(`/api/admin/contacts?${params}`)
            if (!response.ok) throw new Error("Failed to fetch")

            const data = await response.json()
            setContacts(data.contacts)
            setPagination(data.pagination)
        } catch {
            toast.error("Failed to load contacts")
        } finally {
            setIsLoading(false)
        }
    }

    const updateStatus = async (id: string, status: string) => {
        try {
            const response = await fetch("/api/admin/contacts", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, status }),
            })

            if (!response.ok) throw new Error("Failed to update")

            setContacts(contacts.map((c) => (c._id === id ? { ...c, status: status as Contact["status"] } : c)))
            toast.success("Status updated")
        } catch {
            toast.error("Failed to update status")
        }
    }

    const serviceLabels: Record<string, string> = {
        software: "Software Development",
        mobile: "Mobile App Development",
        marketing: "Digital Marketing",
        design: "UI/UX Design",
        other: "Other",
    }

    const budgetLabels: Record<string, string> = {
        "5k-10k": "$5,000 - $10,000",
        "10k-25k": "$10,000 - $25,000",
        "25k-50k": "$25,000 - $50,000",
        "50k-100k": "$50,000 - $100,000",
        "100k+": "$100,000+",
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Contact Submissions</h1>
                    <p className="text-gray-400 mt-1">Manage contact form submissions</p>
                </div>
                <button
                    onClick={() => fetchContacts()}
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
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="replied">Replied</option>
                </select>
            </div>

            {isLoading ? (
                <div className="flex items-center justify-center h-64">
                    <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                </div>
            ) : contacts.length === 0 ? (
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 text-center">
                    <Mail className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">No contacts found</p>
                </div>
            ) : (
                <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-800/50">
                                <tr>
                                    <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Contact</th>
                                    <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Service</th>
                                    <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Budget</th>
                                    <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Status</th>
                                    <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Date</th>
                                    <th className="text-left px-6 py-4 text-gray-400 font-medium text-sm">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800">
                                {contacts.map((contact) => (
                                    <tr key={contact._id} className="hover:bg-gray-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <p className="text-white font-medium">{contact.name}</p>
                                            <p className="text-gray-400 text-sm">{contact.email}</p>
                                            {contact.company && (
                                                <p className="text-gray-500 text-xs">{contact.company}</p>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-gray-300 text-sm">
                                            {contact.service ? serviceLabels[contact.service] || contact.service : "-"}
                                        </td>
                                        <td className="px-6 py-4 text-gray-300 text-sm">
                                            {contact.budget ? budgetLabels[contact.budget] || contact.budget : "-"}
                                        </td>
                                        <td className="px-6 py-4">
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
                                        </td>
                                        <td className="px-6 py-4 text-gray-400 text-sm">
                                            {format(new Date(contact.createdAt), "MMM d, yyyy")}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => setSelectedContact(contact)}
                                                    className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white transition-colors"
                                                    title="View"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                {contact.status === "new" && (
                                                    <button
                                                        onClick={() => updateStatus(contact._id, "read")}
                                                        className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-blue-400 transition-colors"
                                                        title="Mark as read"
                                                    >
                                                        <CheckCircle className="w-4 h-4" />
                                                    </button>
                                                )}
                                            </div>
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
                                        onClick={() => fetchContacts(page)}
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

            {/* Contact Detail Modal */}
            {selectedContact && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-gray-900 border border-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-gray-800 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white">Contact Details</h2>
                            <button
                                onClick={() => setSelectedContact(null)}
                                className="text-gray-400 hover:text-white"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-gray-400 text-sm">Name</p>
                                    <p className="text-white">{selectedContact.name}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm">Email</p>
                                    <a href={`mailto:${selectedContact.email}`} className="text-blue-400 hover:underline">
                                        {selectedContact.email}
                                    </a>
                                </div>
                                {selectedContact.company && (
                                    <div>
                                        <p className="text-gray-400 text-sm">Company</p>
                                        <p className="text-white">{selectedContact.company}</p>
                                    </div>
                                )}
                                {selectedContact.service && (
                                    <div>
                                        <p className="text-gray-400 text-sm">Service</p>
                                        <p className="text-white">{serviceLabels[selectedContact.service]}</p>
                                    </div>
                                )}
                                {selectedContact.budget && (
                                    <div>
                                        <p className="text-gray-400 text-sm">Budget</p>
                                        <p className="text-white">{budgetLabels[selectedContact.budget]}</p>
                                    </div>
                                )}
                                <div>
                                    <p className="text-gray-400 text-sm">Submitted</p>
                                    <p className="text-white">
                                        {format(new Date(selectedContact.createdAt), "PPpp")}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm mb-2">Message</p>
                                <div className="bg-gray-800 rounded-lg p-4">
                                    <p className="text-white whitespace-pre-wrap">{selectedContact.message}</p>
                                </div>
                            </div>
                            <div className="flex gap-3 pt-4">
                                <select
                                    value={selectedContact.status}
                                    onChange={(e) => {
                                        updateStatus(selectedContact._id, e.target.value)
                                        setSelectedContact({ ...selectedContact, status: e.target.value as Contact["status"] })
                                    }}
                                    className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none"
                                >
                                    <option value="new">New</option>
                                    <option value="read">Read</option>
                                    <option value="replied">Replied</option>
                                </select>
                                <a
                                    href={`mailto:${selectedContact.email}?subject=Re: Your inquiry to GenAI Digital Solutions`}
                                    className="px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition-colors"
                                >
                                    Reply via Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
