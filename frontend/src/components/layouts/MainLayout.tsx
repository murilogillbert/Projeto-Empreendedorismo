import { Outlet } from "react-router-dom"
import { Header } from "@/components/ui/header"
import { Footer } from "@/components/ui/footer"

export function MainLayout() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1 pb-20"> {/* pb-20 to account for fixed footer */}
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
