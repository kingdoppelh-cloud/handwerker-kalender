'use client';
// Force redeploy - marketing update

// Landing Page
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Calendar, MessageCircle, Navigation } from 'lucide-react';
import SchemaOrg from '@/components/SchemaOrg';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-100">
      <SchemaOrg />
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden text-white">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero_video_poster.webp"
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* 60% Black Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Handwerk trifft Digitalisierung
            </div>

            <h1 className="text-5xl font-extrabold sm:text-7xl mb-8 tracking-tight text-white animate-fade-in [animation-delay:200ms]">
              Schluss mit <span className="text-blue-400">Telefon-Chaos</span>.
            </h1>

            <p className="text-xl text-slate-200 mb-12 leading-relaxed animate-fade-in [animation-delay:400ms]">
              Buchen Sie Ihren Handwerker-Termin direkt online – einfach, schnell und verbindlich. Für mehr Zeit im echten Leben.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in [animation-delay:600ms]">
              <Link href="/buchen">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-7 h-auto bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/20 rounded-2xl group transition-all duration-300">
                  Jetzt Termin sichern
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg text-white border-white/30 bg-white/5 backdrop-blur-md hover:bg-white/10 px-8 py-7 h-auto rounded-2xl transition-all duration-300">
                  Business Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <div className="py-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 font-bold text-slate-900"><CheckCircle2 className="text-blue-600" size={20} /> MEISTERBETRIEB</div>
          <div className="flex items-center gap-2 font-bold text-slate-900"><CheckCircle2 className="text-blue-600" size={20} /> 24h SERVICE</div>
          <div className="flex items-center gap-2 font-bold text-slate-900"><CheckCircle2 className="text-blue-600" size={20} /> DSGVO SICHER</div>
        </div>
      </div>

      {/* PILOT-AKTION Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20 -mr-48 -mt-48" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[48px] p-8 md:p-16 text-center max-w-4xl mx-auto shadow-2xl">
            <div className="inline-block px-4 py-1.5 bg-yellow-400 text-blue-900 font-bold text-sm rounded-full mb-8 transform -rotate-2">
              LIMITED PILOT OFFER
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              Starten Sie jetzt für nur <span className="text-yellow-400">495,00 €</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Sichern Sie sich einen von nur 10 Pilot-Plätzen. Einmalige Zahlung, volle Power. Wir digitalisieren Ihren Betrieb persönlich.
            </p>
            <a
              href="https://wa.me/491772666006?text=Moin%20Hendrik,%20ich%20habe%20Interesse%20am%20Pilot-Platz."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-6 bg-green-600 text-white font-black text-xl rounded-2xl shadow-xl hover:bg-green-700 hover:scale-105 active:scale-95 transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] group/btn"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              Jetzt per WhatsApp anfragen
              <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
            </a>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-blue-200">
              <span className="flex items-center gap-1"><CheckCircle2 size={16} /> Keine monatlichen Kosten</span>
              <span className="flex items-center gap-1"><CheckCircle2 size={16} /> Persönliche Einrichtung</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-5xl mb-4">Ihr Vorsprung durch digitale Terminplanung</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                <Calendar size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">24/7 Buchung</h3>
              <p className="text-slate-600 leading-relaxed text-lg">Buchen Sie Ihren Termin, wann immer es Ihnen passt – auch mitten in der Nacht oder am Wochenende.</p>
            </div>

            <div className="group p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">DSGVO Konform</h3>
              <p className="text-slate-600 leading-relaxed text-lg">Ihre persönlichen Daten sind bei uns sicher und nach strengen deutschen Standards geschützt.</p>
            </div>

            <div className="group p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                <Navigation size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">1-Klick-Navigation</h3>
              <p className="text-slate-600 leading-relaxed text-lg">Starten Sie die Route zum Kunden direkt aus dem Dashboard. Nie wieder Adressen ins Navi abtippen – einfach losfahren.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Bio Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[48px] p-8 md:p-16 border border-slate-100 shadow-xl flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="w-32 h-32 md:w-48 md:h-48 bg-blue-100 rounded-[40px] flex-shrink-0 flex items-center justify-center text-blue-600 overflow-hidden border-4 border-slate-50 shadow-inner">
              {/* Replace with real image in production */}
              <MapPin size={80} className="opacity-20 absolute" />
              <span className="text-4xl font-black">HH</span>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Hendrik Heilos – Ihr Partner vor Ort</h3>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Ich bin Hendrik, Webentwickler aus der Region. Mein Ziel ist es, das Handwerk durch smarte Lösungen vom Telefon-Chaos zu befreien, damit Sie sich auf Ihre echte Arbeit konzentrieren können. Ich begleite Sie persönlich bei der Einrichtung Ihres Kalenders.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/buchen">
                  <Button variant="outline" className="rounded-xl font-bold">Live-Demo testen</Button>
                </Link>
                <Link href="/buchen">
                  <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl font-bold text-white px-8">Jetzt anfragen</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg" />
                Handwerker<span className="text-blue-400">Kalender</span>
              </div>
              <p className="text-slate-400 max-w-sm">
                Die moderne Lösung für das Handwerk von morgen. Digitalisieren Sie Ihren Buchungsprozess in Rekordzeit.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Links</h4>
              <ul className="space-y-4 text-slate-400">
                <li><Link href="/buchen" className="hover:text-blue-400 transition-colors">Jetzt Termin buchen</Link></li>
                <li><Link href="/dashboard" className="hover:text-blue-400 transition-colors">Business Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Rechtliches</h4>
              <ul className="space-y-4 text-slate-400">
                <li><Link href="/impressum" className="hover:text-blue-400 transition-colors">Impressum</Link></li>
                <li><Link href="/datenschutz" className="hover:text-blue-400 transition-colors">Datenschutz</Link></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} HandwerkerKalender Pro. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </main>
  );
}
