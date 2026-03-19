"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, MoreHorizontal, AlertCircle, Clock, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

type Task = {
  id: string
  title: string
  priority: "High" | "Medium" | "Low"
  difficulty: string
  status: string
}

const initialTasks: Task[] = [
  { id: "1", title: "Setup authentication flow", priority: "High", difficulty: "Hard", status: "To Do" },
  { id: "2", title: "Design database schema", priority: "Medium", difficulty: "Medium", status: "To Do" },
  { id: "3", title: "Implement dark mode", priority: "Low", difficulty: "Easy", status: "In Progress" },
  { id: "4", title: "Create landing page", priority: "High", difficulty: "Medium", status: "In Progress" },
  { id: "5", title: "Setup project repository", priority: "High", difficulty: "Easy", status: "Done" },
]

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [draggedItem, setDraggedItem] = useState<string | null>(null)

  const columns = ["To Do", "In Progress", "Done"]

  const handleDragStart = (e: React.DragEvent, id: string) => {
    setDraggedItem(id)
    e.dataTransfer.effectAllowed = "move"
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
  }

  const handleDrop = (e: React.DragEvent, status: string) => {
    e.preventDefault()
    if (!draggedItem) return

    setTasks(tasks.map(task => 
      task.id === draggedItem ? { ...task, status } : task
    ))
    setDraggedItem(null)
  }

  const PriorityIcon = ({ priority }: { priority: string }) => {
    if (priority === "High") return <AlertCircle className="h-3 w-3 text-destructive" />
    if (priority === "Medium") return <Clock className="h-3 w-3 text-amber-500" />
    return <CheckCircle2 className="h-3 w-3 text-emerald-500" />
  }

  return (
    <div className="flex flex-col gap-8 w-full h-[calc(100vh-8rem)]">
      <div className="flex justify-between items-center z-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Task Board</h1>
          <p className="text-muted-foreground mt-1">Manage project tasks and priorities.</p>
        </div>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
          <Plus className="h-4 w-4" /> New Task
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 flex-1 overflow-hidden">
        {columns.map(column => (
          <div 
            key={column} 
            className="flex flex-col h-full bg-surface/30 rounded-xl border border-border overflow-hidden"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, column)}
          >
            <div className="p-4 border-b border-border bg-surface flex justify-between items-center">
              <h3 className="font-semibold">{column}</h3>
              <Badge variant="secondary" className="bg-background text-muted-foreground w-6 h-6 flex items-center justify-center p-0 rounded-full">
                {tasks.filter(t => t.status === column).length}
              </Badge>
            </div>
            
            <div className="p-4 flex-1 overflow-y-auto space-y-3">
              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
                }}
                className="space-y-3"
              >
                {tasks.filter(t => t.status === column).map((task, idx) => (
                  <motion.div key={task.id} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                    <Card 
                      className="bg-card cursor-grab active:cursor-grabbing border-border hover:border-accent/40 transition-colors shadow-sm"
                      draggable
                      onDragStart={(e) => handleDragStart(e, task.id)}
                    >
                      <CardContent className="p-4 flex flex-col gap-3">
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-medium text-sm leading-tight">{task.title}</h4>
                          <button className="text-muted-foreground hover:text-foreground shrink-0 mt-0.5">
                            <MoreHorizontal className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex gap-2">
                            <Badge variant="outline" className={`font-mono uppercase tracking-widest text-[10px] px-1.5 h-5 font-normal flex gap-1 ${
                              task.priority === 'High' ? 'text-destructive border-destructive/20 bg-destructive/10' :
                              task.priority === 'Medium' ? 'text-amber-500 border-amber-500/20 bg-amber-500/10' :
                              'text-emerald-500 border-emerald-500/20 bg-emerald-500/10'
                            }`}>
                              <PriorityIcon priority={task.priority} />
                              {task.priority}
                            </Badge>
                            <Badge variant="outline" className="font-mono uppercase tracking-widest text-[10px] px-1.5 h-5 font-normal bg-background text-muted-foreground border-border">
                              {task.difficulty}
                            </Badge>
                          </div>
                          <div className="w-6 h-6 rounded-full bg-surface border border-border flex items-center justify-center text-[10px] text-muted-foreground font-mono">
                            S
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
              
              {tasks.filter(t => t.status === column).length === 0 && (
                <div className="h-32 rounded-lg border-2 border-dashed border-border flex items-center justify-center text-sm text-muted-foreground opacity-50">
                  Drop tasks here
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
