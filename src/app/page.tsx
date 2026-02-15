// Landing Page
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, ShieldCheck, Star, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden text-white">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
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

      {/* Features */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-5xl mb-4">Warum HandwerkerKalender?</h2>
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
                <Star size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Einfaches Dashboard</h3>
              <p className="text-slate-600 leading-relaxed text-lg">Handwerker verwalten alle Anfragen zentral an einem Ort. Effizienz trifft auf Handwerk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-2">
              <div className="text-2xl font-bold mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg" />
                Handwerker<span className="text-blue-400">Kalender</span>
              </div>
              <p className="text-slate-400 max-w-sm">
                Die moderne Lösung für das Handwerk von morgen. Digitalisieren Sie Ihren Buchungsprozess in Rekordzeit.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Rechtliches</h4>
              <ul className="space-y-4 text-slate-400">
                <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
                <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            © 2024 HandwerkerKalender. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
}
