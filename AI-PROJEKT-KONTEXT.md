# KI-Projekt-Repräsentation: HandwerkerKalender Pro 💎

Dieses Dokument dient dazu, anderen KI-Agenten den vollständigen Kontext, die visuelle Sprache und die technische Architektur dieses Projekts verständlich zu machen.

## 🎨 Visuelle Identität & UI/UX
- **Design-Philosophie:** Hochwertige "Premium-Handwerker" Ästhetik.
- **Farbpalette:** 
    - `Primär:` Handwerker Indigo (#1E40AF)
    - `Hintergrund:` Konsistent `slate-50` auf allen Seiten, Glassmorphismus-Elemente.
- **Hero-Erlebnis:** 
    - Vollbild-Video-Hintergrund (`hero.mp4`) mit 60% schwarzen Overlay.
    - **Smooth Fade-In:** Video startet unsichtbar (`opacity-0`) und faded bei `canplaythrough` sanft ein (700ms CSS-Transition). Kein Poster-Flash.
    - Große, kontrastreiche Typografie ("Schluss mit Telefon-Chaos.").
- **Navigation:**
    - **SiteHeader:** Sticky Header mit Logo + "Zurück"-Button auf allen Unterseiten (`/buchen`, `/impressum`, `/datenschutz`). Glassmorphism (`bg-white/80 backdrop-blur-xl`).
- **Interaktionen:**
    - **Glass-Cards:** Karten nutzen `backdrop-blur-md` und halbtransparente Rahmen.
    - **Premium Feedback:** `sonner` für elegante Toast-Benachrichtigungen.
    - **Animationen:** Subtile `fade-in` und `shimmer` Effekte bei interaktiven Elementen.
- **Cookie-Banner:** Eigenes Design (Tailwind, dark glassmorphism, slide-in Animation), nutzt `localStorage` statt `react-cookie-consent`.

## 🛠 Tech-Stack
- **Framework:** Next.js 14 (App Router, TypeScript).
- **Styling:** Tailwind CSS mit Premium-Design-Tokens.
- **Backend/DB (Produktion):** Supabase (Auth, PostgreSQL).
- **Lokal/Demo DB:** `Dexie.js` (IndexedDB) zur Speicherung lokaler Buchungen ohne Account-Zwang (Version: v3).
- **Benachrichtigungen:** `sonner` (Toasts) & `Resend` (Emails).
- **PWA:** Vollständig installierbar als App (Service Worker, Manifest, SVG-Icons 192/512).
- **SEO:** Server-Side Rendering (Homepage ist Server Component), page-level Metadata auf allen Seiten, Schema.org JSON-LD.

## 🚀 Kernfunktionen
1. **Premium Buchungsprozess:**
    - Dienstleistungsauswahl, Datum/Zeit & persönliche Daten.
    - **Datums-Validierung:** `min={today}` verhindert Buchungen in der Vergangenheit.
    - **No-Show-Schutz:** Optionales E-Mail-Feld für automatisierte Bestätigungen.
    - Animierte Erfolgs-Toasts ("Bestätigung an Kunden gesendet!").
    - Redirect zur Premium-Erfolgsseite (`/success`) mit Confetti-Animation.
2. **Admin-Dashboard (Demo & Real):**
    - **1-Klick-Navigation:** Direkte Google Maps Route zum Kunden.
    - **Interaktive Anrufe:** Telefonnummern für sofortiges Wählen optimiert.
    - **E-Mail/SMS-Simulation:** Modal mit Tabs für E-Mail- und SMS-Vorschau bei Terminbestätigung (Demo-Modus). SMS-Preview im Smartphone-Chat-UI.
    - **Persistence:** Lokale Aufträge (Dexie) können gelöscht oder im Status geändert werden, bleibt über Refreshes bestehen.
3. **Marketing & Conversion:**
    - **Pilot-Angebot:** 495€ Setup + 29€ mtl., limitierte Plätze (3 Spots).
    - **WhatsApp-CTA:** Direkter WhatsApp-Link für schnelle Anfragen.
    - **Live-Demo-Button:** Verlinkt direkt auf `/dashboard?demo=true`.
    - Schema.org JSON-LD für LocalBusiness SEO.
4. **PWA / Installierbar:**
    - Service Worker mit Network-First Strategie und Offline-Fallback.
    - Manifest mit SVG-Icons (192x192, 512x512, maskable).
    - Installierbar auf iOS, Android und Desktop.

## 📁 Wichtige Dateien & Komponenten
| Datei | Zweck |
|-------|-------|
| `src/app/page.tsx` | Landing Page (Server Component, SSR) |
| `src/app/dashboard/page.tsx` | Admin-Dashboard mit Demo-Modus & E-Mail/SMS-Modal |
| `src/components/BookingForm.tsx` | Buchungsformular mit Zod-Validierung |
| `src/components/HeroVideo.tsx` | Video-Component mit Fade-In (Client Component) |
| `src/components/SiteHeader.tsx` | Sticky Header für Unterseiten |
| `src/components/CookieBanner.tsx` | Cookie-Banner (eigene localStorage-Logik) |
| `src/components/ServiceWorkerRegistration.tsx` | SW-Registrierung (global im Layout) |
| `src/components/SchemaOrg.tsx` | Strukturierte Daten für Google |
| `src/middleware.ts` | Auth-Schutz für Dashboard + Demo-Bypass |
| `src/lib/db.ts` | Dexie.js Schema (IndexedDB) |
| `public/sw.js` | Service Worker |

## 🔒 Sicherheit & Demo-Modus
- **Guest-Bypass:** Voll funktionsfähiger Demo-Modus (`/dashboard?demo=true`), der Mock-Daten und lokale Dexie-Daten (selbst erstellte Termine) kombiniert.
- **Supabase RLS:** Gehärtete Richtlinien für Produktions-Daten.
- **Template-Design:** Impressum, SchemaOrg und API-Routen enthalten Platzhalter-Daten, die vom Kunden (Käufer) ersetzt werden.

## 🤖 KI-Anweisungen für die Analyse
Gehen Sie bei der Analyse von einem "Premium-First" Mindset aus. Der Fokus liegt darauf, dem Handwerker massiv Zeit zu sparen (Navi, Telefon, Orga). Nutzen Sie die Dexie-Logik für Demo-Erweiterungen und halten Sie den glassmorphic Premium-Look konsistent. Die Homepage ist eine **Server Component** – kein `'use client'` hinzufügen!
