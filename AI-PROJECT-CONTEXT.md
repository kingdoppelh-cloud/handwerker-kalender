# AI Project Representation: HandwerkerKalender Pro 💎

This document is designed for AI agents to understand the full context, visual language, and technical architecture of this project without a video demonstration.

## 🎨 Visual Identity & UI/UX
- **Theme:** High-end "Premium Handyman" aesthetic.
- **Color Palette:** 
    - `Primary:` Handwerker Indigo (#1E40AF)
    - `Background:` Mesh-gradients (Slate-950/Indigo) and Glassmorphism.
- **Hero Experience:** 
    - Full-screen Video Hero (`hero.mp4`) with a 60% black overlay.
    - Large, high-contrast typography ("Schluss mit Telefon-Chaos.").
- **Interactions:**
    - **Glass-Cards:** Cards use `backdrop-blur-md` and semi-transparent borders for a frosted-glass effect.
    - **Success State:** Post-booking redirect to `/success` featuring a `canvas-confetti` animation and a "Success-Bounce" icon.
    - **Animations:** Subtle `fade-in` and `shimmer` effects on all interactive elements.

## 🛠 Tech Stack
- **Framework:** Next.js 14 (App Router, TypeScript).
- **Styling:** Tailwind CSS with custom premium design tokens.
- **Backend/DB:** Supabase (Auth, PostgreSQL, RLS).
- **Email:** Resend (Transactional emails with React-Email templates).
- **Form Handling:** React Hook Form + Zod validation.

## 🚀 Core Features
1. **Public Booking Flow:**
    - Multi-step service selection.
    - Real-time validation.
    - Animated success page with "Confidence-Building" UI elements (testmonials, checkmarks).
2. **Admin Dashboard:**
    - Glassmorphic interface.
    - Interactive "Overview-Bar" with live-updating statistics.
    - Management of `pending`, `confirmed`, and `completed` bookings.
    - Direct Google Calendar deep-linking for scheduling.
3. **SEO & Discovery:**
    - Schema.org (LocalBusiness) JSON-LD integrated.
    - Dynamic Sitemap & Robots.txt.
    - OpenGraph tags for professional Social Media sharing.

## 🔒 Security & Privacy
- **Supabase RLS:** Hardened policies. Anonymized inserts for customers; authenticated-only read/write for administrators.
- **GDPR Ready:** Integrated Cookie Banner and professional Legal/Privacy templates.

## 🤖 AI Instructions for Analysis
When analyzing this project, assume a "Premium-First" mindset. Every UI element is designed to justify high service pricing (e.g., 990€+). Focus on maintaining the glassmorphic style and ensuring the transactional security of the data layers.
