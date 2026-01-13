import { useAuthStore } from "@/store/authStore"
import { Button } from "@/components/ui/button"
import { ScanLine, User, History, LogIn, UserPlus } from "lucide-react"
import { Link } from "react-router-dom"

export function Footer() {
    const { isAuthenticated } = useAuthStore()

    return (
        <footer className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background p-2">
            <div className="container mx-auto flex items-center justify-between px-4 h-16">
                {isAuthenticated ? (
                    <>
                        <Button variant="ghost" className="flex flex-col items-center gap-1 h-full w-20">
                            <History className="h-6 w-6" />
                            <span className="text-xs">Sessões</span>
                        </Button>

                        <div className="absolute left-1/2 -translate-x-1/2 -top-6">
                            <Button size="icon" className="h-16 w-16 rounded-full shadow-lg border-4 border-background">
                                <ScanLine className="h-8 w-8" />
                            </Button>
                        </div>

                        <Button variant="ghost" className="flex flex-col items-center gap-1 h-full w-20">
                            <User className="h-6 w-6" />
                            <span className="text-xs">Perfil</span>
                        </Button>
                    </>
                ) : (
                    <>
                        <Link to="/login">
                            <Button variant="ghost" className="flex flex-col items-center gap-1 h-full w-20">
                                <LogIn className="h-6 w-6" />
                                <span className="text-xs">Entrar</span>
                            </Button>
                        </Link>

                        <div className="absolute left-1/2 -translate-x-1/2 -top-6">
                            <Button size="icon" className="h-16 w-16 rounded-full shadow-lg border-4 border-background">
                                <ScanLine className="h-8 w-8" />
                            </Button>
                        </div>

                        <Link to="/register">
                            <Button variant="ghost" className="flex flex-col items-center gap-1 h-full w-20">
                                <UserPlus className="h-6 w-6" />
                                <span className="text-xs">Cadastrar</span>
                            </Button>
                        </Link>
                    </>
                )}
            </div>
        </footer>
    )
}
