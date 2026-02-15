// Landing Page
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, ShieldCheck, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-6xl mb-6">
              Termine beim Handwerker <span className="text-blue-400">online buchen</span>.
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Einfach, schnell und zuverlässig. Ohne Warteschleife direkt zu Ihrem Wunschtermin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/buchen">
                <Button size="lg" className="w-full sm:w-auto text-lg px-12 h-14">
                  Jetzt Termin sichern
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg text-white border-white bg-transparent hover:bg-white/10 h-14">
                  Für Handwerker
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-[#1E40AF]">
                <Calendar size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">24/7 Buchung</h3>
              <p className="text-slate-600">Buchen Sie Ihren Termin, wann immer es Ihnen passt – auch mitten in der Nacht.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-[#1E40AF]">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">DSGVO Konform</h3>
              <p className="text-slate-600">Ihre Daten sind bei uns sicher und nach deutschen Standards geschützt.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-[#1E40AF]">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">Top Qualität</h3>
              <p className="text-slate-600">Wir vermitteln nur geprüfte und professionelle Handwerksbetriebe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 mb-6 font-medium">© 2024 HandwerkerKalender</p>
          <div className="flex justify-center gap-8 text-sm text-slate-400">
            <Link href="/impressum" className="hover:text-blue-600">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-blue-600">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
