"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, LayoutDashboard, Zap, GitPullRequest, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Animations
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo(
        heroTextRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        heroImageRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 1, delay: 0.3, ease: "power3.out" }
      );

      // Features Scroll Animation
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <Zap className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="font-bold text-xl tracking-tight">ShipMind</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How it works</Link>
            <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-foreground text-muted-foreground transition-colors hidden sm:block">Log in</Link>
            <Link href="/dashboard">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section ref={heroRef} className="py-24 md:py-32 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center border border-border/0">
              <div ref={heroTextRef} className="flex flex-col gap-6 max-w-xl">
                <Badge variant="outline" className="w-fit border-border bg-surface text-secondary-foreground font-medium px-3 py-1">
                  Built by engineers for engineers
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                  AI Copilot for Building Better Products
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Analyze your code, tasks, and progress in real time. Ship faster with an intelligence layer over your workflow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/dashboard">
                    <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 border-border hover:bg-surface">
                    View Demo
                  </Button>
                </div>
              </div>
              
              <div ref={heroImageRef} className="relative w-full aspect-[4/3] rounded-xl border border-border bg-card shadow-2xl overflow-hidden flex flex-col">
                {/* Mock Dashboard Preview */}
                <div className="h-12 border-b border-border bg-surface flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-border" />
                    <div className="w-3 h-3 rounded-full bg-border" />
                    <div className="w-3 h-3 rounded-full bg-border" />
                  </div>
                  <div className="ml-4 h-6 w-full max-w-[200px] bg-background rounded-md border border-border" />
                </div>
                <div className="flex-1 flex w-full">
                  <div className="w-48 border-r border-border bg-surface/50 p-4 hidden sm:flex flex-col gap-2">
                    <div className="h-4 w-24 bg-border/50 rounded" />
                    <div className="h-4 w-full bg-border/50 rounded mt-4" />
                    <div className="h-4 w-3/4 bg-border/50 rounded" />
                    <div className="h-4 w-5/6 bg-border/50 rounded" />
                  </div>
                  <div className="flex-1 p-6 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <div className="h-6 w-32 bg-border/50 rounded" />
                      <div className="h-8 w-24 bg-accent/20 rounded-md" />
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-24 bg-surface border border-border rounded-lg" />
                      ))}
                    </div>
                    <div className="flex-1 bg-surface border border-border rounded-lg mt-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" ref={featuresRef} className="py-24 bg-surface/30 border-t border-border">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Intelligence at every step</h2>
              <p className="text-muted-foreground text-lg">
                Everything you need to write better code, manage tasks seamlessly, and deliver products faster than ever.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Brain className="h-6 w-6 text-accent" />,
                  title: "AI Project Intelligence",
                  description: "Automatically analyze your codebase to identify bottlenecks and suggest improvements."
                },
                {
                  icon: <LayoutDashboard className="h-6 w-6 text-accent" />,
                  title: "Task Optimization",
                  description: "Smart prioritization algorithms that organize your backlog based on impact and effort."
                },
                {
                  icon: <GitPullRequest className="h-6 w-6 text-accent" />,
                  title: "Code Insights",
                  description: "Real-time metrics on code health, technical debt, and team velocity."
                },
                {
                  icon: <Zap className="h-6 w-6 text-accent" />,
                  title: "Team Collaboration",
                  description: "Keep everyone aligned with automated status updates right in your workflow."
                }
              ].map((feature, idx) => (
                <Card key={idx} className="feature-card bg-card border-border shadow-none">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-surface border border-border flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 border-t border-border">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold tracking-tight mb-8">How ShipMind works</h2>
                <div className="flex flex-col gap-8">
                  {[
                    {
                      step: "01",
                      title: "Connect your project",
                      description: "Integrate with GitHub, Jira, or Linear in seconds. We securely analyze your data without storing your code."
                    },
                    {
                      step: "02",
                      title: "Analyze progress",
                      description: "Our AI engine builds a comprehensive map of your tasks and codebase to find optimization opportunities."
                    },
                    {
                      step: "03",
                      title: "Improve & ship",
                      description: "Get actionable insights, refactor suggestions, and optimized task prioritization to ship faster."
                    }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex gap-6 relative"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {idx !== 2 && (
                        <div className="absolute top-10 left-5 w-px h-[calc(100%-24px)] bg-border" />
                      )}
                      <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center font-bold text-accent shrink-0 z-10">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2 bg-card border border-border rounded-xl aspect-square lg:aspect-[4/3] p-8 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="w-24 h-24 rounded-full bg-surface border border-border mx-auto mb-6 flex items-center justify-center">
                    <Zap className="h-10 w-10 text-accent/50" />
                  </div>
                  <p className="font-medium">Integration Visualization</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 bg-surface/30 border-t border-border">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Simple, transparent pricing</h2>
              <p className="text-muted-foreground text-lg">Start for free, upgrade when you need more power.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Free Plan */}
              <Card className="bg-card border-border shadow-none flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl">Free</CardTitle>
                  <CardDescription className="text-base mt-2">Perfect for side projects and indie devs.</CardDescription>
                  <div className="mt-4 font-bold text-4xl">
                    $0<span className="text-lg text-muted-foreground font-normal"> /mo</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col group">
                  <ul className="space-y-4 mb-8 flex-1">
                    {["Up to 3 projects", "Basic AI insights", "Community support", "Standard integrations"].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent" />
                        <span className="text-secondary-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full border-border hover:bg-surface h-12">
                    Get Started Free
                  </Button>
                </CardContent>
              </Card>

              {/* Pro Plan */}
              <Card className="bg-card border-accent shadow-none flex flex-col relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-accent" />
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">Pro</CardTitle>
                      <CardDescription className="text-base mt-2">For professional developers and teams.</CardDescription>
                    </div>
                    <Badge className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">Popular</Badge>
                  </div>
                  <div className="mt-4 font-bold text-4xl">
                    $29<span className="text-lg text-muted-foreground font-normal"> /mo</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col group">
                  <ul className="space-y-4 mb-8 flex-1">
                    {["Unlimited projects", "Advanced AI mentor", "Priority support", "Custom workflows", "GitHub & Jira full sync"].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent" />
                        <span className="text-secondary-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-12">
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-surface border border-border flex items-center justify-center">
              <Zap className="w-3 h-3 text-muted-foreground" />
            </div>
            <span className="font-semibold tracking-tight text-muted-foreground">ShipMind</span>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Contact</Link>
            <Link href="#" className="hover:text-foreground transition-colors">GitHub</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
