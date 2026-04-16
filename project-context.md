---
project_name: 'wlater-vercel-sito'
user_name: 'aless'
date: '2026-04-16'
sections_completed: ['technology_stack', 'language_rules', 'framework_rules', 'testing_rules', 'quality_rules', 'workflow_rules', 'anti_patterns']
status: 'complete'
rule_count: 15
optimized_for_llm: true
---

# Project Context for AI Agents

_This file contains critical rules and patterns that AI agents must follow when implementing code in this project. Focus on unobvious details that agents might otherwise miss._

---

## Technology Stack & Versions

- **Framework**: Next.js 16.2.3 (App Router)
- **Language**: TypeScript 5.7.3 (Strict Mode)
- **UI Architecture**: React 19 + Radix UI (Modular)
- **Styling**: Tailwind CSS 4.2.0 (PostCSS plugin `@tailwindcss/postcss`)
- **Animations**: GSAP 3.13.0 (Timeline & ScrollTrigger heavy)
- **Validation**: Zod + React Hook Form
- **Icons**: Lucide React

## Critical Implementation Rules

### Language & Framework Patterns
- **TypeScript**: No `any`. Use strict typing. Prefer Interface over Type where applicable for library compatibility.
- **Imports**: Use `@/` alias for all root-relative paths. Avoid deep relative paths (`../../`).
- **React Components**: 
  - Prefer **Server Components** for data fetching and layout structure.
  - Use **Client Components** (`'use client'`) strictly for GSAP animations, interactive UI, and hooks.
- **Next.js Routing**: Follow standard App Router conventions in `app/`.

### GSAP & Animation Rules
- **Lifecycle**: Animations must be wrapped in `gsap.context()` or `useGSAP()` to ensure proper cleanup and prevent memory leaks.
- **Performance**: Prefer `x`, `y`, `scale`, `opacity` for performance-critical transitions. Avoid animating layout properties like `top`, `left`, `width` within GSAP timelines.
- **ScrollTrigger**: Always define `markers: false` for production.

### UI & Styling Guidelines
- **Tailwind 4**: Use standard utility classes. Avoid legacy plugins not compatible with the v4 engine.
- **Component Organization**:
  - `components/ui/`: Atomic, low-level components (shadcn style).
  - `components/sections/`: Page-level containers and logical sections.
  - `components/animations/`: Reusable GSAP animation wrappers.

### Testing & Quality
- **Naming**:PascalCase for Component filenames (`ComponentName.tsx`). kebab-case for directories.
- **Type Safety**: Ensure Zod schemas are used for all external data sources (API/Forms).

---

## Usage Guidelines

**For AI Agents:**
- Read this file before implementing any code.
- Follow ALL rules exactly as documented.
- When in doubt, prefer the more restrictive option.
- Update this file if new patterns emerge.

**For Humans:**
- Keep this file lean and focused on agent needs.
- Update when technology stack changes.
- Review periodically to optimize and remove outdated rules.

Last Updated: 2026-04-16
