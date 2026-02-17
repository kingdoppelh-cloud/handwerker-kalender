'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) setVisible(true);
    }, []);

    const accept = (type: 'all' | 'essential') => {
        localStorage.setItem('cookie-consent', type);
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 inset-x-0 z-50 p-4 animate-in slide-in-from-bottom-4 duration-500">
            <div className="max-w-2xl mx-auto bg-slate-900/95 backdrop-blur-xl text-white rounded-2xl shadow-2xl shadow-black/20 border border-slate-700/50 p-5">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ShieldCheck size={20} className="text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm text-slate-300 leading-relaxed">
                            Wir verwenden Cookies für eine optimale Nutzererfahrung.{' '}
                            <Link href="/datenschutz" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">
                                Datenschutzerklärung
                            </Link>
                        </p>
                        <div className="flex flex-wrap gap-3 mt-4">
                            <button
                                onClick={() => accept('all')}
                                className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl transition-colors"
                            >
                                Akzeptieren
                            </button>
                            <button
                                onClick={() => accept('essential')}
                                className="px-5 py-2 bg-transparent hover:bg-white/10 text-slate-300 text-sm font-bold rounded-xl border border-slate-600 transition-colors"
                            >
                                Nur Notwendige
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={() => accept('essential')}
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-slate-500 hover:text-white transition-colors flex-shrink-0"
                        aria-label="Banner schließen"
                    >
                        <X size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
