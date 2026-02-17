'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, Home, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SuccessPage() {
    useEffect(() => {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="max-w-xl w-full">
                <div className="bg-white rounded-[48px] shadow-2xl shadow-blue-900/10 p-12 text-center relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500" />
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50" />

                    <div className="relative z-10">
                        <div className="w-24 h-24 bg-emerald-100 rounded-[32px] flex items-center justify-center mx-auto mb-10 text-emerald-600 animate-bounce">
                            <CheckCircle size={48} />
                        </div>

                        <h1 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">
                            Terminanfrage <span className="text-blue-600">erfolgreich!</span>
                        </h1>

                        <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                            Vielen Dank für Ihr Vertrauen. Wir haben Ihre Buchung erhalten und melden uns <strong>in Kürze</strong> bei Ihnen zur finalen Bestätigung.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link href="/">
                                <Button variant="outline" className="w-full h-16 rounded-2xl border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all">
                                    <Home className="mr-2 h-5 w-5" />
                                    Zur Startseite
                                </Button>
                            </Link>
                            <Link href="/buchen">
                                <Button className="w-full h-16 rounded-2xl bg-blue-600 hover:bg-blue-700 font-bold shadow-lg shadow-blue-900/20 transition-all group">
                                    Nächster Termin
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-12 pt-12 border-t border-slate-100 flex flex-col items-center gap-4">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                                ))}
                                <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold">
                                    +12
                                </div>
                            </div>
                            <p className="text-sm font-medium text-slate-400 italic">
                                &quot;Hervorragender Service, sehr zu empfehlen!&quot; – Familie Müller
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
