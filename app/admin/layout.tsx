import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { SessionProvider } from "next-auth/react"
import AdminSidebar from "@/components/admin/sidebar"

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await auth()

    if (!session?.user) {
        redirect("/login")
    }

    return (
        <SessionProvider session={session}>
            <div className="min-h-screen bg-gray-950">
                <AdminSidebar />
                <main className="lg:pl-64">
                    <div className="p-6 lg:p-8">
                        {children}
                    </div>
                </main>
            </div>
        </SessionProvider>
    )
}
