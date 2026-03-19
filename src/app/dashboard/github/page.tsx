import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, GitCommit, GitPullRequest, ShieldCheck, Activity } from "lucide-react"

export default function GithubInsightsPage() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">GitHub Insights</h1>
        <p className="text-muted-foreground">Repository analytics, code health, and contribution history.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Repo Summary */}
        <Card className="bg-card md:col-span-2 flex flex-col justify-between">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center shrink-0">
                <Github className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl">shipmind-hq/core-engine</CardTitle>
                <CardDescription>Primary repository • TypeScript, Next.js, Go</CardDescription>
              </div>
              <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 px-3 py-1">
                Connected
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center py-4 border-t border-border/50">
              <div className="flex flex-col gap-1 items-center px-4 w-full">
                <span className="text-2xl font-bold font-mono tracking-tight">1,204</span>
                <span className="text-[10px] text-muted-foreground font-mono uppercase font-semibold">Commits</span>
              </div>
              <div className="w-px h-10 bg-border shrink-0" />
              <div className="flex flex-col gap-1 items-center px-4 w-full">
                <span className="text-2xl font-bold font-mono tracking-tight">18</span>
                <span className="text-[10px] text-muted-foreground font-mono uppercase font-semibold">Open PRs</span>
              </div>
              <div className="w-px h-10 bg-border shrink-0" />
              <div className="flex flex-col gap-1 items-center px-4 w-full">
                <span className="text-2xl font-bold font-mono tracking-tight">42</span>
                <span className="text-[10px] text-muted-foreground font-mono uppercase font-semibold">Issues</span>
              </div>
              <div className="w-px h-10 bg-border shrink-0" />
              <div className="flex flex-col gap-1 items-center px-4 w-full">
                <span className="text-2xl font-bold font-mono tracking-tight">8</span>
                <span className="text-[10px] text-muted-foreground font-mono uppercase font-semibold">Contributors</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Code Health Score */}
        <Card className="bg-card">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Code Health</CardTitle>
                <CardDescription>Static analysis score</CardDescription>
              </div>
              <ShieldCheck className="h-5 w-5 text-accent" />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center py-6">
            <div className="relative w-32 h-32 rounded-full border-[12px] border-surface flex items-center justify-center mb-4">
              <div className="absolute inset-0 rounded-full border-[12px] border-emerald-500" style={{ clipPath: "polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 0 100%, 0 70%)" }}></div>
              <div className="absolute inset-0 rounded-border flex items-center justify-center bg-card -m-[12px] w-[104px] h-[104px] rounded-full mx-auto my-auto z-10 shadow-inner">
                <div className="text-center">
                  <span className="text-4xl font-bold font-mono text-emerald-500">A-</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-2 w-full">
              <Badge variant="outline" className="bg-surface text-muted-foreground font-mono text-[10px] uppercase tracking-wider font-normal border-border">94% Test Coverage</Badge>
              <Badge variant="outline" className="bg-surface text-muted-foreground font-mono text-[10px] uppercase tracking-wider font-normal border-border">0 Vulns</Badge>
              <Badge variant="outline" className="bg-surface text-muted-foreground font-mono text-[10px] uppercase tracking-wider font-normal border-border">Low Tech Debt</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Commit Graph */}
        <Card className="bg-card lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Contribution Activity</CardTitle>
                <CardDescription>Commit history over the last 6 months</CardDescription>
              </div>
              <Activity className="h-5 w-5 text-accent" />
            </div>
          </CardHeader>
          <CardContent>
            {/* Fake Contribution Graph Grid */}
            <div className="flex gap-1 overflow-x-auto pb-4 pt-2">
              {Array.from({ length: 24 }).map((_, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-1 shrink-0">
                  {Array.from({ length: 7 }).map((_, rowIndex) => {
                    const randomIntensity = colIndex > 18 || (colIndex > 10 && rowIndex % 2 === 0)
                      ? 'bg-accent/80' 
                      : (colIndex > 5 && colIndex < 12) 
                        ? 'bg-accent/40' 
                        : (colIndex % 3 === 0 && rowIndex % 4 === 0) 
                          ? 'bg-accent/20' 
                          : 'bg-surface border border-border/50';
                    return (
                      <div 
                        key={`${colIndex}-${rowIndex}`} 
                        className={`w-4 h-4 rounded-sm ${randomIntensity} transition-colors hover:border-foreground/50 hover:border`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity Feed */}
        <Card className="bg-card flex flex-col">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto pr-2 flex flex-col gap-6 max-h-[300px]">
            {[
              { icon: GitCommit, title: "fix: update db connection pool limit", time: "2 hours ago", user: "suraj" },
              { icon: GitPullRequest, title: "feat: kanban drag and drop", time: "5 hours ago", user: "alex" },
              { icon: GitCommit, title: "chore: update dependencies", time: "1 day ago", user: "jd-bot" },
              { icon: Github, title: "Release v3.0.1", time: "2 days ago", user: "admin" },
              { icon: GitCommit, title: "docs: update API reference", time: "3 days ago", user: "sarah" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start relative before:absolute before:left-[11px] before:top-8 before:bottom-[-24px] before:w-px before:bg-border last:before:hidden">
                <div className="w-6 h-6 rounded-full bg-surface border border-border flex items-center justify-center shrink-0 z-10 mt-1">
                  <item.icon className="w-3 h-3 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate" title={item.title}>{item.title}</p>
                  <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                    <span className="font-medium text-secondary-foreground">@{item.user}</span>
                    <span>•</span>
                    <span>{item.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
