import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BrainCircuit, Send, Sparkles, Terminal, FileCode2 } from "lucide-react"

export default function MentorPage() {
  return (
    <div className="flex flex-col gap-6 h-[calc(100vh-8rem)] w-full">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Mentor</h1>
        <p className="text-muted-foreground mt-1">Get contextual help based on your codebase and active tasks.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0 overflow-hidden">
        {/* Chat Area */}
        <Card className="flex-1 flex flex-col bg-card border-border overflow-hidden">
          <ScrollArea className="flex-1 p-6">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start max-w-[85%]">
                <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center shrink-0 border border-border">
                  <span className="text-sm font-medium">S</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-semibold">Suraj</span>
                  <div className="bg-surface border border-border text-foreground px-4 py-3 rounded-2xl rounded-tl-sm text-sm">
                    How should I approach implementing the KanBan drag and drop feature for the task board?
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start max-w-[85%] self-end">
                <div className="flex flex-col gap-1 items-end w-full">
                  <span className="text-sm font-semibold text-accent">ShipMind AI</span>
                  <div className="bg-accent/10 border border-accent/20 text-foreground px-4 py-3 rounded-2xl rounded-tr-sm text-sm">
                    <p className="mb-3">Based on your stack (React, Tailwind), you have a few good options. If you want a lightweight solution without visual dependencies, the native HTML5 Drag and Drop API is sufficient for basic lists, but can be verbose.</p>
                    <p className="mb-3">For a production-ready Kanban board like Trello, <code className="bg-surface border border-border px-1.5 py-0.5 rounded text-accent">@hello-pangea/dnd</code> (a maintained fork of react-beautiful-dnd) is highly recommended. It handles accessibility, keyboard navigation, and smooth animations automatically.</p>
                    <div className="bg-surface border border-border p-3 rounded-lg mt-2 font-mono text-xs overflow-x-auto">
                      npx shadcn@latest add dnd<br/>
                      <span className="text-muted-foreground">// Alternatively</span><br/>
                      npm i @hello-pangea/dnd
                    </div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <BrainCircuit className="w-5 h-5 text-accent-foreground" />
                </div>
              </div>
            </div>
          </ScrollArea>
          
          <CardFooter className="p-4 border-t border-border bg-background/50">
            <div className="flex w-full items-center gap-2">
              <div className="relative flex-1">
                <Sparkles className="absolute left-3 top-3 h-4 w-4 text-accent" />
                <Input 
                  placeholder="Ask about your code, tasks, or architecture..." 
                  className="pl-10 h-10 bg-surface border-border focus-visible:ring-accent"
                />
              </div>
              <Button size="icon" className="h-10 w-10 bg-accent text-accent-foreground hover:bg-accent/90 shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>

        {/* Suggestions Panel */}
        <div className="w-full lg:w-80 flex flex-col gap-6 shrink-0 h-full overflow-y-auto">
          <Card className="bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <FileCode2 className="h-4 w-4 text-accent" />
                Contextual Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {[
                "Explain the auth flow in api/login.ts",
                "How to optimize Dashboard Page load time?",
                "Generate tests for utils/date-formatter.ts",
                "Review my recent commits for security issues"
              ].map((text, i) => (
                <button 
                  key={i} 
                  className="text-left text-sm p-3 rounded-lg bg-surface border border-border hover:bg-accent/10 hover:border-accent/30 transition-colors text-muted-foreground hover:text-foreground"
                >
                  {text}
                </button>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Terminal className="h-4 w-4 text-accent" />
                Active Context
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Current File</span>
                  <span className="font-mono text-xs px-2 py-1 bg-surface border border-border rounded">TasksPage.tsx</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Active Task</span>
                  <span className="font-mono px-2 py-1 text-xs bg-surface border border-border rounded truncate ml-4 max-w-[120px]">#42 KanBan</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
