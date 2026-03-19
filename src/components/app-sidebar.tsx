"use client"
import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { 
  Zap, 
  LayoutDashboard, 
  FolderGit2, 
  KanbanSquare, 
  LineChart, 
  BrainCircuit, 
  Github, 
  Users,
  Settings
} from "lucide-react"

const navItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Projects", url: "/dashboard/projects", icon: FolderGit2 },
  { title: "Task Board", url: "/dashboard/tasks", icon: KanbanSquare },
  { title: "Analytics", url: "/dashboard/analytics", icon: LineChart },
  { title: "AI Mentor", url: "/dashboard/mentor", icon: BrainCircuit },
  { title: "GitHub Insights", url: "/dashboard/github", icon: Github },
  { title: "Team", url: "/dashboard/team", icon: Users },
]

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  return (
    <Sidebar {...props} className="bg-surface border-r border-border">
      <SidebarHeader className="h-14 flex items-center px-4 border-b border-border">
        <Link href="/" className="flex items-center gap-2 mt-2 w-full">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5 text-accent-foreground" />
          </div>
          <span className="font-bold tracking-tight text-lg truncate">ShipMind</span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-2 py-4">
        <SidebarMenu className="gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.url || (pathname?.startsWith(`${item.url}/`) && item.url !== "/dashboard")
            return (
              <SidebarMenuItem key={item.title}>
                <Link href={item.url} className={`flex items-center gap-3 w-full h-10 px-3 rounded-md transition-colors ${isActive ? 'bg-accent/10 text-accent font-medium' : 'text-muted-foreground hover:bg-background hover:text-foreground'}`}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/settings" className="flex items-center gap-3 w-full h-10 px-3 rounded-md transition-colors text-muted-foreground hover:bg-background hover:text-foreground">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

