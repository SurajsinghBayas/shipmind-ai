"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, LayoutDashboard, Brain, CheckSquare, TrendingUp, TrendingDown } from "lucide-react"
import { motion } from "framer-motion"

export default function DashboardPage() {
  const container: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item: any = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  }

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back. Here's what's happening today.</p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {/* Health Score */}
        <motion.div variants={item}>
          <Card className="bg-card h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Project Health</CardTitle>
              <Activity className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-mono tracking-tight">92/100</div>
              <p className="text-xs text-secondary-foreground flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3 text-emerald-500" /> +4 from last week
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Active Projects */}
        <motion.div variants={item}>
          <Card className="bg-card h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Projects</CardTitle>
              <LayoutDashboard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-mono tracking-tight">4</div>
              <p className="text-xs text-muted-foreground mt-1">
                2 on track, 2 at risk
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tasks Completed */}
        <motion.div variants={item}>
          <Card className="bg-card h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Tasks Completed</CardTitle>
              <CheckSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-mono tracking-tight">38</div>
              <p className="text-xs text-muted-foreground mt-1">
                This week
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* AI Insight Metric */}
        <motion.div variants={item}>
          <Card className="bg-card h-full">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Velocity Score</CardTitle>
              <Brain className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-mono tracking-tight text-emerald-500">High</div>
              <p className="text-xs text-secondary-foreground flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3 text-emerald-500" /> Optimal state
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>AI Insights</CardTitle>
            <CardDescription>Generated from your repository and task activity.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="p-4 rounded-lg bg-surface border border-border flex gap-4">
              <Brain className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm">Refactoring Suggestion</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  The `auth-module` in project Phoenix has grown too complex. Consider splitting the context provider.
                </p>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-surface border border-border flex gap-4">
              <Brain className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm">Task Priority Shift</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Based on recent bugs, you should prioritize "Fix payment webhook" over building the new settings page.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your team's latest updates.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              {[
                { time: "2h ago", text: "Merged PR #142 into main", project: "Phoenix" },
                { time: "4h ago", text: "Completed Task 'Design System Updates'", project: "ShipMind" },
                { time: "Yesterday", text: "Deployed to production v2.1.0", project: "Dashboard App" },
              ].map((act, i) => (
                <div key={i} className="flex gap-4 items-start relative before:absolute before:left-[11px] before:top-8 before:bottom-[-24px] before:w-px before:bg-border last:before:hidden">
                  <div className="w-6 h-6 rounded-full bg-surface border border-border flex items-center justify-center shrink-0 z-10 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div className="flex-1 pb-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-medium">{act.text}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{act.time}</span>
                      <span>•</span>
                      <Badge variant="outline" className="text-[10px] h-5 px-1.5">{act.project}</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
