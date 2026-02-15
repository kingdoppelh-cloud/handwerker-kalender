# KI-Projekt-Repräsentation: HandwerkerKalender Pro 💎

Dieses Dokument dient dazu, anderen KI-Agenten den vollständigen Kontext, die visuelle Sprache und die technische Architektur dieses Projekts verständlich zu machen, ohne dass eine Video-Demonstration erforderlich ist.

## 🎨 Visuelle Identität & UI/UX
- **Design-Philosophie:** Hochwertige "Premium-Handwerker" Ästhetik.
- **Farbpalette:** 
    - `Primär:` Handwerker Indigo (#1E40AF)
    - `Hintergrund:` Mesh-Gradients (Slate-950/Indigo) und Glassmorphismus.
- **Hero-Erlebnis:** 
    - Vollbild-Video-Hintergrund (`hero.mp4`) mit einem 60% schwarzen Overlay.
    - Große, kontrastreiche Typografie ("Schluss mit Telefon-Chaos.").
- **Interaktionen:**
    - **Glass-Cards:** Karten nutzen `backdrop-blur-md` und halbtransparente Rahmen für einen Milchglas-Effekt.
    - **Erfolgs-Status:** Umleitung nach der Buchung auf `/success` mit einer `canvas-confetti` Animation und einem "Erfolgs-Bounce" Icon.
    - **Animationen:** Subtile `fade-in` und `shimmer` Effekte bei allen interaktiven Elementen.

## 🛠 Tech-Stack
- **Framework:** Next.js 14 (App Router, TypeScript).
- **Styling:** Tailwind CSS mit maßgeschneiderten Premium-Design-Tokens.
- **Backend/DB:** Supabase (Auth, PostgreSQL, RLS).
- **E-Mail:** Resend (Transaktionale E-Mails mit React-Email-Templates).
- **Formular-Handling:** React Hook Form + Zod Validierung.

## 🚀 Kernfunktionen
1. **Öffentlicher Buchungsprozess:**
    - Mehrstufige Dienstleistungsauswahl.
    - Echtzeit-Validierung.
    - Animierte Dankeseite mit vertrauenswürdigen UI-Elementen (Testimonials, Checkmarks).
2. **Admin-Dashboard:**
    - Glassmorphic-Interface.
    - Interaktive "Overview-Bar" mit Live-Statistiken.
    - Verwaltung von `offenen`, `bestätigten` und `erledigten` Buchungen.
    - Direkte Google Calendar Deep-Links zur Terminplanung.
3. **SEO & Auffindbarkeit:**
    - Schema.org (LocalBusiness) JSON-LD integriert.
    - Dynamische Sitemap & Robots.txt.
    - OpenGraph-Tags für professionelles Teilen in sozialen Medien.

## 🔒 Sicherheit & Datenschutz
- **Supabase RLS:** Gehärtete Richtlinien. Anonyme Inserts für Kunden; Lese-/Schreibzugriff nur für authentifizierte Administratoren.
- **DSGVO Ready:** Integrierter Cookie-Banner und professionelle Vorlagen für Impressum/Datenschutz.

## 🤖 KI-Anweisungen für die Analyse
Gehen Sie bei der Analyse dieses Projekts von einem "Premium-First" Mindset aus. Jedes UI-Element ist darauf ausgelegt, hohe Service-Preise zu rechtfertigen (z. B. 990 €+). Konzentrieren Sie sich darauf, den glassmorphic Stil beizubehalten und die transaktionale Sicherheit der Datenschichten zu gewährleisten.
