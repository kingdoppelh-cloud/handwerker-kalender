import BookingForm from '@/components/BookingForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Termin buchen – HandwerkerKalender',
    description: 'Buchen Sie jetzt Ihren Handwerker-Termin online. Schnell, einfach und verbindlich.',
};

export default function BookingPage() {
    return (
        <main className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                        Termin buchen
                    </h1>
                    <p className="mt-2 text-lg text-slate-600">
                        Wählen Sie Ihren Wunschtermin für unseren Service.
                    </p>
                </div>

                <BookingForm />

                <div className="mt-8 text-center text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} HandwerkerKalender - Professionell & Zuverlässig</p>
                </div>
            </div>
        </main>
    );
}
