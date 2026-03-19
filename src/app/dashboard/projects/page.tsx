"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal, Plus, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const projects = [
  { name: "ShipMind App", status: "On Track", progress: 75, members: ["S", "A", "JD"], role: "Admin", updated: "2h ago" },
  { name: "API Gateway", status: "At Risk", progress: 40, members: ["K", "JD"], role: "Member", updated: "1d ago" },
  { name: "Frontend Monorepo", status: "Planning", progress: 10, members: ["S"], role: "Admin", updated: "3d ago" },
  { name: "Data Pipeline", status: "Completed", progress: 100, members: ["A", "S", "M", "JD"], role: "Viewer", updated: "1w ago" },
]

export default function ProjectsPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, scale: 0.98, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  }

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground mt-1">Manage all your active projects and team progress.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="h-9 gap-1.5 border-border">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Button size="sm" className="h-9 gap-1.5 bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus className="h-4 w-4" />
            <span>New Project</span>
          </Button>
        </div>
      </div>

      <motion.div 
        variants={container as any}
        initial="hidden"
        animate="show"
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, idx) => (
          <motion.div variants={item as any} key={idx}>
            <Card className="bg-card h-full flex flex-col group hover:border-accent/50 transition-colors cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div className="space-y-1">
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <CardDescription className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Updated {project.updated}</CardDescription>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground -mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </CardHeader>
              <CardContent className="pb-4 flex-1">
                <div className="flex justify-between items-center mb-2 mt-4">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm font-mono text-muted-foreground">{project.progress}%</span>
                </div>
                <div className="h-2 w-full bg-surface rounded-full overflow-hidden border border-border">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 1, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                    className={`h-full rounded-r-full ${
                      project.progress === 100 ? 'bg-emerald-500' : 
                      project.status === 'At Risk' ? 'bg-destructive' : 
                      'bg-accent'
                    }`}
                  />
                </div>
              </CardContent>
              <CardFooter className="pt-0 flex justify-between items-center border-t border-border pt-4 mt-2">
                <div className="flex -space-x-2">
                  {project.members.map((member, i) => (
                    <Avatar key={i} className="h-8 w-8 border-2 border-card">
                      <AvatarFallback className="bg-surface text-xs font-mono">{member}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <Badge variant="outline" className={`font-mono text-[10px] uppercase tracking-widest font-normal ${
                  project.status === 'On Track' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                  project.status === 'At Risk' ? 'bg-destructive/10 text-destructive border-destructive/20' :
                  project.status === 'Planning' ? 'bg-accent/10 text-accent border-accent/20' :
                  'bg-zinc-500/10 text-zinc-400 border-zinc-500/20'
                }`}>
                  {project.status}
                </Badge>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
