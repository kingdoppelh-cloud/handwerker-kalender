import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "HandwerkerKalender - Profi-Termine online buchen",
  description: "Buchen Sie Ihren Handwerker-Termin einfach, schnell und verbindlich online. Schluss mit Warteschleifen!",
  metadataBase: new URL('https://handwerker-kalender.vercel.app'),
  openGraph: {
    title: "HandwerkerKalender - Terminbuchung leicht gemacht",
    description: "Der schnellste Weg zum Profi-Handwerker.",
    url: 'https://handwerker-kalender.vercel.app',
    siteName: 'HandwerkerKalender',
    locale: 'de_DE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-center" richColors />
        <ServiceWorkerRegistration />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
