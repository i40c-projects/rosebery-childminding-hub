# Rosebery Childminding Hub

A complete React + TypeScript + Vite + Tailwind CSS platform for **Rosebery Childminding Hub** - a facility-based childminding hub in Liverpool operating under Liverpool Muslim Society.

> Rosebery is not a standard nursery. Independent childminders operate their own childcare businesses from shared, professionally managed premises.

## Features

### Public Website (Sprint 1)
- Full-viewport hero with ghost typography, grain overlays and floating cards
- Pages: Home, About, How It Works, Services, Parents, Become a Childminder, Safety, Contact
- Register Interest and Login entry points
- Multi-step child registration form

### Authentication (Sprint 2)
- Mock role-based login for all 7 roles
- Protected routes with role-based access control
- Demo quick-login buttons on login page

### Dashboards (Sprints 3–10)
| Role | Ghost Text | Key Features |
|------|-----------|--------------|
| Owner | ANALYTICS | Revenue, expenses, occupancy, compliance alerts, Recharts |
| Admin | CONTROL | Users, parents, children, rooms, registrations, documents |
| Manager | OVERVIEW | Attendance, rooms, groups, incidents, cleaning |
| Finance | FINANCE | Invoices, payments, facility charges, reports |
| Childminder | MY GROUPS | Children, attendance, meals, naps, notes |
| Assistant | ASSIST | Limited attendance, activities, meals, notes |
| Parent | MY CHILD | Child profiles, updates, invoices, documents |

### Operational Modules (Sprint 12)
Rooms, announcements, invoices, payments, document center, compliance, risk assessments, cleaning logs, visitor logs, incidents and reports — integrated across admin, manager and finance dashboards.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 8**
- **Tailwind CSS 4** (with `@tailwindcss/vite`)
- **react-router-dom 7**
- **lucide-react** icons
- **recharts** for dashboard charts
- **Supabase-ready** architecture (`src/lib/supabase.ts` + `supabase/schema.sql`)

## Design System

| Token | Value |
|-------|-------|
| Body font | Inter |
| Display font | Anton |
| Rose Pink | `#E65A7A` |
| Berry Purple | `#7A1F4D` |
| Cream | `#FFF7EE` |
| Warm Beige | `#F4E1C9` |
| Sage Green | `#A7C7A3` |
| Soft Sky | `#A9D8F5` |

Features: ghost typography, glassmorphism cards, grain overlays, 300–650ms transitions, pill buttons, card-based tables.

## Getting Started

### Prerequisites
- Node.js 20+
- npm 10+

### Installation

```bash
# Clone or extract the project
cd rosebery-childminding-hub

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Demo Login

Visit `/login` and use any of the quick demo buttons, or sign in with:

| Role | Email |
|------|-------|
| Owner | owner@rosebery.local |
| Admin | admin@rosebery.local |
| Manager | manager@rosebery.local |
| Finance | finance@rosebery.local |
| Childminder | childminder@rosebery.local |
| Assistant | assistant@rosebery.local |
| Parent | parent@rosebery.local |

Use password `demo1234` for all demo logins.

### Build for Production

```bash
npm run build
npm run preview
```

## Supabase Setup

1. Create a project at [supabase.com](https://supabase.com)
2. Run `supabase/schema.sql` in the SQL editor
3. Add your credentials to `.env`:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

4. Replace mock data calls with Supabase queries using `getSupabase()` from `src/lib/supabase.ts`

## Project Structure

```
rosebery-childminding-hub/
├── public/
├── src/
│   ├── components/
│   │   ├── auth/          # ProtectedRoute
│   │   ├── charts/        # ChartCard
│   │   ├── layout/        # Navbar, Footer, DashboardLayout
│   │   └── ui/            # Button, Card, Input, Modal, etc.
│   ├── context/           # AuthContext
│   ├── data/              # mockData.ts
│   ├── lib/               # supabase.ts, utils.ts
│   ├── pages/
│   │   ├── dashboard/     # Role dashboards
│   │   ├── public/        # Public website pages
│   │   └── registration/  # Multi-step registration
│   ├── routes/            # AppRoutes
│   └── types/             # TypeScript types
├── supabase/
│   └── schema.sql
├── .env.example
├── index.html
└── package.json
```

## Important Business Rules

- Do **not** describe Rosebery as government-funded
- Do **not** show outdoor play area as an existing facility
- Use language: "proposed", "subject to approval", "facility-based childminding hub"

## License

Private - Rosebery Childminding Hub / Liverpool Muslim Society.
