'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex-shrink-0" />
                    <span className="text-lg font-bold text-slate-900">
                        Handwerker<span className="text-blue-600">Kalender</span>
                    </span>
                </Link>
                <Link
                    href="/"
                    className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
                >
                    <ArrowLeft size={16} />
                    Zurück
                </Link>
            </div>
        </header>
    );
}
