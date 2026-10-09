# ShipMind AI

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)

**AI-powered developer productivity platform.** Manage projects, track tasks, collaborate with your team, and ship faster — with an AI mentor guiding every step.

---

## Features

- **Project management** — create and organize projects with full task lifecycle tracking
- **AI mentor** — contextual AI guidance and code review built into your workflow
- **GitHub integration** — link repositories, track pull requests, and sync issues directly from the dashboard
- **Team collaboration** — invite teammates, assign tasks, and manage workload across projects
- **Analytics** — visualize velocity, completion rates, and team productivity over time
- **Fluid UI** — smooth animations powered by GSAP and Framer Motion

---

## Dashboard

| Module      | Description                                         |
|-------------|-----------------------------------------------------|
| Projects    | Create and manage all active projects               |
| Tasks       | Kanban-style task board with priority and status    |
| GitHub      | Linked repos, open PRs, and issue tracking          |
| Team        | Member management and role assignments              |
| Mentor      | AI-powered guidance, code review, and suggestions   |
| Analytics   | Sprint velocity, burndown, and team health metrics  |

---

## Tech Stack

| Layer      | Technology                                              |
|------------|---------------------------------------------------------|
| Framework  | Next.js 16.2 (App Router)                               |
| Language   | TypeScript                                              |
| Styling    | Tailwind CSS                                            |
| Animation  | GSAP + Framer Motion                                    |
| UI         | Radix Base UI, Lucide Icons, cmdk                       |
| Data       | TanStack Query                                          |

---

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## Project Structure

```
src/
├── app/
│   ├── dashboard/
│   │   ├── analytics/     # Productivity metrics
│   │   ├── github/        # Repository and PR tracking
│   │   ├── mentor/        # AI assistant
│   │   ├── projects/      # Project management
│   │   ├── tasks/         # Task board
│   │   └── team/          # Team members
│   └── page.tsx           # Landing page
├── components/            # Shared UI components
├── hooks/                 # Custom React hooks
└── lib/                   # Utilities and config
```

---

## Environment Variables

See `.env.example` for all required configuration values.

---

Built by [Suraj Bayas](https://github.com/SurajsinghBayas)