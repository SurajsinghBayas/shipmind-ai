"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  LayoutDashboard,
  FolderGit2,
  KanbanSquare,
  LineChart,
  BrainCircuit,
  Github,
  Users
} from "lucide-react"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full relative flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground shadow-sm transition-colors hover:bg-accent/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring sm:pr-12"
      >
        <span className="hidden lg:inline-flex">Search documentation, projects, tasks...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation">
              <CommandItem onSelect={() => runCommand(() => router.push("/dashboard"))}>
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/projects"))}>
                <FolderGit2 className="mr-2 h-4 w-4" />
                <span>Projects</span>
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/tasks"))}>
                <KanbanSquare className="mr-2 h-4 w-4" />
                <span>Task Board</span>
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/analytics"))}>
                <LineChart className="mr-2 h-4 w-4" />
                <span>Analytics</span>
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/mentor"))}>
                <BrainCircuit className="mr-2 h-4 w-4" />
                <span>AI Mentor</span>
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/github"))}>
                <Github className="mr-2 h-4 w-4" />
                <span>GitHub Insights</span>
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/team"))}>
                <Users className="mr-2 h-4 w-4" />
                <span>Team</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem onSelect={() => runCommand(() => router.push("/settings"))}>
                <Settings className="mr-2 h-4 w-4" />
                <span>General Settings</span>
              </CommandItem>
              <CommandItem onSelect={() => runCommand(() => router.push("/dashboard/team"))}>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
