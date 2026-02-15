# ⚡ Performance-Leitfaden: Medien & Video

Um die Ladezeit deiner Landingpage auf das absolute Minimum zu senken, habe ich bereits technische Vorkehrungen im Code getroffen. Hier sind die nächsten Schritte, um das Video-Erlebnis zu perfektionieren:

## 1. Das Poster-Image (Wichtig für LCP)
Ein Poster-Image ist das Bild, das angezeigt wird, *bevor* das Video geladen ist. Ohne dieses Bild sieht der Nutzer kurzzeitig eine schwarze oder leere Fläche.

**Deine Aufgabe:**
1. Mache einen Screenshot vom ersten Frame deines `hero.mp4` Videos.
2. Speichere diesen Screenshot als `public/hero_video_poster.webp`.
3. Der Code in `page.tsx` ist bereits so konfiguriert, dass er automatisch nach dieser Datei sucht.

## 2. Video-Kompression (Dateigröße senken)
Das aktuelle MP4-Format ist universell, aber WebM ist oft 30-50% kleiner bei gleicher Qualität.

**Empfehlung:**
- Nutze ein Tool wie [Handbrake](https://handbrake.fr/) oder einen Online-Konverter.
- Konvertiere `hero.mp4` in `hero.webm`.
- Füge in `src/app/page.tsx` im `<video>` Tag eine zusätzliche Source hinzu (ich habe den Platzhalter bereits vorbereitet).

## 3. Warum WebP für Bilder?
WebP bietet die beste Kompression bei höchster Qualität. Da wir in diesem Projekt fast ausschließlich Vektor-Icons (Lucide) nutzen, ist die Seite bereits extrem leichtgewichtig.

## 4. Status der Optimierung
- **Gerechtfertigt:** Das Video ist das Herzstück des Premium-Gefühls.
- **Code-Optimiert:** Das Video lädt jetzt erst, wenn es wirklich gebraucht wird (`preload="auto"`), und blockiert nicht das Rendering der Texte.

Mit diesen Schritten wird deine Seite in unter 1 Sekunde visuell bereit sein! 🚀
