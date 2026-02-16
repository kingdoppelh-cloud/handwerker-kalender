# KI-Projekt-Repräsentation: HandwerkerKalender Pro 💎

Dieses Dokument dient dazu, anderen KI-Agenten den vollständigen Kontext, die visuelle Sprache und die technische Architektur dieses Projekts verständlich zu machen.

## 🎨 Visuelle Identität & UI/UX
- **Design-Philosophie:** Hochwertige "Premium-Handwerker" Ästhetik.
- **Farbpalette:** 
    - `Primär:` Handwerker Indigo (#1E40AF)
    - `Hintergrund:` Mesh-Gradients (Slate-950/Indigo) und Glassmorphismus.
- **Hero-Erlebnis:** 
    - Vollbild-Video-Hintergrund (`hero.mp4`) mit einem 60% schwarzen Overlay.
    - Große, kontrastreiche Typografie ("Schluss mit Telefon-Chaos.").
- **Interaktionen:**
    - **Glass-Cards:** Karten nutzen `backdrop-blur-md` und halbtransparente Rahmen.
    - **Premium Feedback:** Integration von `sonner` für elegante Toast-Benachrichtigungen (z.B. nach Buchungen).
    - **Animationen:** Subtile `fade-in` und `shimmer` Effekte bei interaktiven Elementen.

## 🛠 Tech-Stack
- **Framework:** Next.js 14 (App Router, TypeScript).
- **Styling:** Tailwind CSS mit Premium-Design-Tokens.
- **Backend/DB (Produktion):** Supabase (Auth, PostgreSQL).
- **Lokal/Demo DB:** `Dexie.js` (IndexedDB) zur Speicherung lokaler Buchungen ohne Account-Zwang. (Aktuelle Version: v3).
- **Benachrichtigungen:** `sonner` (Toasts) & `Resend` (Emails).

## 🚀 Kernfunktionen
1. **Premium Buchungsprozess:**
    - Dienstleistungsauswahl, Datum/Zeit & persönliche Daten.
    - **No-Show-Schutz:** Optionales E-Mail-Feld für automatisierte Bestätigungen.
    - Animierte Erfolgs-Toasts ("Bestätigung an Kunden gesendet!").
2. **Admin-Dashboard (Demo & Real):**
    - **1-Klick-Navigation:** Direkte Google Maps Route zum Kunden via Dashboard.
    - **Interaktive Anrufe:** Telefonnummern sind für sofortiges Wählen optimiert.
    - **Persistence Fix:** Lokale Aufträge (Dexie) können gelöscht oder im Status geändert werden, was über Refreshes hinweg bestehen bleibt.
3. **Marketing & Conversion:**
    - **Pilot-Angebot:** Fokus auf "1-Klick-Navigation" und limitierte Plätze (3 Spots verbleibend).
    - Preis-Transparenz (29€ mtl. Hosting & Wartung).
    - Schema.org JSON-LD für LocalBusiness SEO.

## 🔒 Sicherheit & Demo-Modus
- **Guest-Bypass:** Voll funktionsfähiger Demo-Modus (`/dashboard?demo=true`), der sowohl Mock-Daten als auch lokale Dexie-Daten (selbst erstellte Termine) kombiniert.
- **Supabase RLS:** Gehärtete Richtlinien für Produktions-Daten.

## 🤖 KI-Anweisungen für die Analyse
Gehen Sie bei der Analyse von einem "Premium-First" Mindset aus. Der Fokus liegt darauf, dem Handwerker massiv Zeit zu sparen (Navi, Telefon, Orga). Nutzen Sie die Dexie-Logik für Demo-Erweiterungen und halten Sie den glassmorphic Premium-Look konsistent.
