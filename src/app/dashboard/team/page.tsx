import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Users, Plus, MoreHorizontal, Mail } from "lucide-react"

const team = [
  { name: "Suraj Bayas", role: "Frontend Lead", email: "suraj@shipmind.dev", status: "Active", avatar: "S" },
  { name: "Alex Chen", role: "Backend Engineer", email: "alex@shipmind.dev", status: "Active", avatar: "A" },
  { name: "Maria Garcia", role: "Product Designer", email: "maria@shipmind.dev", status: "Away", avatar: "M" },
  { name: "James Doe", role: "DevOps", email: "james@shipmind.dev", status: "Offline", avatar: "J" },
]

export default function TeamPage() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-border pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team Members</h1>
          <p className="text-muted-foreground mt-1">Manage your team and their access levels.</p>
        </div>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
          <Plus className="h-4 w-4" /> Add Member
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        {team.map((member, idx) => (
          <Card key={idx} className="bg-card hover:bg-surface/50 transition-colors border-border shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 gap-4">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <Avatar className="h-12 w-12 border border-border">
                <AvatarFallback className="bg-surface text-foreground font-medium text-lg">
                  {member.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col gap-0.5">
                <span className="font-semibold text-lg leading-none">{member.name}</span>
                <span className="text-sm text-muted-foreground">{member.email}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto mt-2 sm:mt-0 px-2 sm:px-0">
              <div className="flex flex-col sm:items-end gap-1 w-32 shrink-0">
                <span className="text-sm font-medium">{member.role}</span>
              </div>
              
              <Badge variant="outline" className={`font-mono text-[10px] uppercase tracking-widest font-normal shrink-0 ${
                member.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                member.status === 'Away' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                'bg-zinc-500/10 text-zinc-400 border-zinc-500/20'
              }`}>
                {member.status}
              </Badge>
              
              <div className="flex items-center gap-2 shrink-0">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                  <Mail className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
