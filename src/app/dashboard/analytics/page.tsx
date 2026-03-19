import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Activity, Clock, Zap, TrendingUp, TrendingDown } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground mt-1">Detailed breakdown of team velocity and time usage.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Velocity Chart */}
        <Card className="bg-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Team Velocity</CardTitle>
                <CardDescription>Story points completed per sprint</CardDescription>
              </div>
              <Activity className="h-5 w-5 text-accent" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="h-[200px] w-full flex items-end gap-2 px-2">
              {[40, 45, 30, 60, 55, 75, 65].map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center justify-end gap-2 group">
                  <div className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity bg-surface px-1.5 py-0.5 rounded border border-border">
                    {val}
                  </div>
                  <div 
                    className="w-full bg-surface border border-border rounded-t hover:bg-accent/20 hover:border-accent/40 transition-colors"
                    style={{ height: `${val}%` }}
                  />
                  <div className="text-xs text-muted-foreground mt-2">S{i+1}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-6 text-sm">
              <TrendingUp className="h-4 w-4 text-emerald-500" />
              <span className="font-medium">12% increase</span>
              <span className="text-muted-foreground">vs last period</span>
            </div>
          </CardContent>
        </Card>

        {/* Completion Rate Chart */}
        <Card className="bg-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Completion Rate</CardTitle>
                <CardDescription>Tasks planned vs completed</CardDescription>
              </div>
              <Zap className="h-5 w-5 text-accent" />
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="h-[200px] w-full flex flex-col justify-center gap-6 px-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Design System</span>
                  <span className="text-muted-foreground">92%</span>
                </div>
                <div className="h-4 w-full bg-surface rounded-full overflow-hidden border border-border">
                  <div className="h-full bg-accent rounded-r-full" style={{ width: "92%" }} />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Backend API</span>
                  <span className="text-muted-foreground">45%</span>
                </div>
                <div className="h-4 w-full bg-surface rounded-full overflow-hidden border border-border">
                  <div className="h-full bg-amber-500 rounded-r-full" style={{ width: "45%" }} />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Frontend UI</span>
                  <span className="text-muted-foreground">78%</span>
                </div>
                <div className="h-4 w-full bg-surface rounded-full overflow-hidden border border-border">
                  <div className="h-full bg-emerald-500 rounded-r-full" style={{ width: "78%" }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Time Usage */}
        <Card className="bg-card lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Time Usage</CardTitle>
                <CardDescription>Distribution of development time</CardDescription>
              </div>
              <Clock className="h-5 w-5 text-accent" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-8 items-center h-[200px]">
              {/* Fake donut chart using CSS */}
              <div className="relative w-40 h-40 shrink-0 rounded-full border-[16px] border-surface flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-[16px] border-accent" style={{ clipPath: "polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 0 100%, 0 50%)" }}></div>
                <div className="absolute inset-0 rounded-full border-[16px] border-emerald-500" style={{ clipPath: "polygon(50% 50%, 0 50%, 0 0, 50% 0)" }}></div>
                <div className="absolute inset-0 rounded-border flex items-center justify-center bg-card -m-[16px] w-[130px] h-[130px] rounded-full mx-auto my-auto z-10 shadow-inner">
                  <div className="text-center">
                    <span className="text-2xl font-bold">164</span>
                    <span className="text-xs text-muted-foreground block">Hours</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 grid grid-cols-2 gap-4">
                {[
                  { label: "New Features", color: "bg-accent", percent: "65%", hours: "106h" },
                  { label: "Bug Fixes", color: "bg-emerald-500", percent: "25%", hours: "41h" },
                  { label: "Refactoring", color: "bg-surface border border-border", percent: "10%", hours: "17h" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded bg-surface/50 border border-border">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${item.color}`} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold font-mono tracking-tight">{item.percent}</div>
                      <div className="text-[10px] uppercase font-mono tracking-widest text-muted-foreground">{item.hours}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
