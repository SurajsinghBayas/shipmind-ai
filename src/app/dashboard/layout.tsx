import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Search, Bell, Settings } from "lucide-react"
import { CommandMenu } from "@/components/CommandMenu"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col bg-background h-screen overflow-hidden">
        {/* Topbar */}
        <header className="h-14 border-b border-border bg-surface shrink-0 flex items-center justify-between px-4 z-40 backdrop-blur">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1 text-muted-foreground hover:text-foreground" />
            <div className="relative w-64 md:w-96 ml-4 hidden sm:block">
              <CommandMenu />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-muted-foreground hover:text-foreground relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-accent rounded-full border border-surface"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-medium text-sm">
              S
            </div>
          </div>
        </header>
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6 scroll-smooth">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
