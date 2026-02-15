'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, ExternalLink, LogOut, Trash2, Home, CheckCircle2, Clock3, AlertCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createBrowserClient } from '@supabase/ssr';

interface Booking {
    id: string;
    customer_name: string;
    service: string;
    booking_date: string;
    booking_time: string;
    status: 'pending' | 'confirmed' | 'completed' | 'rejected';
    customer_phone: string;
    customer_address: string;
    problem_description: string;
}

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState<'pending' | 'confirmed' | 'completed'>('pending');
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIn0.dummy'
    );

    const fetchBookings = useCallback(async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('bookings')
            .select('*')
            .order('created_at', { ascending: false });

        if (!error && data) {
            setBookings(data as Booking[]);
        }
        setLoading(false);
    }, [supabase]);

    useEffect(() => {
        fetchBookings();
    }, [fetchBookings]);

    const updateStatus = async (id: string, newStatus: string) => {
        const { error } = await supabase
            .from('bookings')
            .update({ status: newStatus })
            .eq('id', id);

        if (!error) {
            fetchBookings();
        }
    };

    const deleteBooking = async (id: string) => {
        if (!confirm('Möchten Sie diese Buchung wirklich dauerhaft löschen?')) return;

        const { error } = await supabase
            .from('bookings')
            .delete()
            .eq('id', id);

        if (!error) {
            fetchBookings();
        } else {
            alert('Fehler beim Löschen der Buchung.');
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/login');
        router.refresh();
    };

    const filteredBookings = bookings.filter(b => b.status === activeTab);

    return (
        <div className="min-h-screen bg-slate-50/50">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <Link href="/" aria-label="Zur Startseite" className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all group">
                            <Home className="h-5 w-5 group-hover:scale-110 transition-transform" />
                        </Link>
                        <div>
                            <h1 className="text-xl font-bold text-slate-900">Admin-Zentrale</h1>
                            <p className="text-xs text-slate-500 font-medium">HandwerkerKalender Pro</p>
                        </div>
                    </div>

                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleLogout}
                        className="text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl px-4"
                    >
                        <LogOut className="h-4 w-4 mr-2" />
                        Abmelden
                    </Button>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Stats / Overview Bar */}
                <div className="mb-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <button
                        onClick={() => setActiveTab('pending')}
                        className={`p-6 rounded-3xl transition-all duration-300 text-left border ${activeTab === 'pending'
                            ? 'bg-white shadow-xl shadow-blue-900/5 border-blue-100 ring-2 ring-blue-600/10'
                            : 'bg-white/40 border-slate-200 hover:bg-white'
                            }`}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-2xl ${activeTab === 'pending' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                                <Clock3 size={24} />
                            </div>
                            <span className="text-3xl font-black text-slate-900">
                                {bookings.filter(b => b.status === 'pending').length}
                            </span>
                        </div>
                        <h3 className="font-bold text-slate-900">Neue Anfragen</h3>
                        <p className="text-xs text-slate-500">Warten auf Bestätigung</p>
                    </button>

                    <button
                        onClick={() => setActiveTab('confirmed')}
                        className={`p-6 rounded-3xl transition-all duration-300 text-left border ${activeTab === 'confirmed'
                            ? 'bg-white shadow-xl shadow-blue-900/5 border-blue-100 ring-2 ring-blue-600/10'
                            : 'bg-white/40 border-slate-200 hover:bg-white'
                            }`}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-2xl ${activeTab === 'confirmed' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                                <CheckCircle2 size={24} />
                            </div>
                            <span className="text-3xl font-black text-slate-900">
                                {bookings.filter(b => b.status === 'confirmed').length}
                            </span>
                        </div>
                        <h3 className="font-bold text-slate-900">Bestätigt</h3>
                        <p className="text-xs text-slate-500">In Bearbeitung</p>
                    </button>

                    <button
                        onClick={() => setActiveTab('completed')}
                        className={`p-6 rounded-3xl transition-all duration-300 text-left border ${activeTab === 'completed'
                            ? 'bg-white shadow-xl shadow-blue-900/5 border-blue-100 ring-2 ring-blue-600/10'
                            : 'bg-white/40 border-slate-200 hover:bg-white'
                            }`}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-2xl ${activeTab === 'completed' ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                                <Calendar size={24} />
                            </div>
                            <span className="text-3xl font-black text-slate-900">
                                {bookings.filter(b => b.status === 'completed').length}
                            </span>
                        </div>
                        <h3 className="font-bold text-slate-900">Erledigt</h3>
                        <p className="text-xs text-slate-500">Abgeschlossene Termine</p>
                    </button>
                </div>

                {/* List Header */}
                <div className="flex items-center justify-between mb-6 px-4 font-bold text-slate-400 text-xs uppercase tracking-widest">
                    <span>Buchungs-Details</span>
                    <span>Aktionen</span>
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 animate-pulse">
                        <div className="w-12 h-12 bg-slate-200 rounded-full mb-4" />
                        <div className="h-4 w-32 bg-slate-200 rounded" />
                    </div>
                ) : (
                    <div className="space-y-6">
                        {filteredBookings.length === 0 ? (
                            <div className="text-center py-24 bg-white/40 rounded-[32px] border-2 border-dashed border-slate-200">
                                <AlertCircle className="mx-auto h-12 w-12 text-slate-300 mb-4" />
                                <p className="text-slate-500 font-medium">Aktuell liegen keine Buchungen vor.</p>
                            </div>
                        ) : (
                            filteredBookings.map(booking => (
                                <BookingCard
                                    key={booking.id}
                                    booking={booking}
                                    onStatusUpdate={updateStatus}
                                    onDelete={deleteBooking}
                                />
                            ))
                        )}
                    </div>
                )}
            </main>
        </div>
    );
}

function BookingCard({ booking, onStatusUpdate, onDelete }: { booking: Booking, onStatusUpdate: (id: string, status: string) => void, onDelete: (id: string) => void }) {
    const calendarLink = getGoogleCalendarLink(booking);

    return (
        <Card className="glass-card rounded-[32px] overflow-hidden group hover:scale-[1.01] transition-all duration-300 animate-fade-in">
            <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                    {/* Left: Info */}
                    <div className="flex-1 p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-black text-lg">
                                {booking.customer_name.charAt(0)}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">{booking.customer_name}</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">{booking.service}</span>
                                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                                    <span className="text-slate-500 text-xs">{booking.id.slice(0, 8)}</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            <div className="space-y-4">
                                <div className="flex items-center text-slate-600 text-sm bg-slate-50 p-3 rounded-2xl border border-slate-100">
                                    <Calendar className="w-4 h-4 mr-3 text-blue-600" />
                                    <span className="font-bold">{booking.booking_date}</span>
                                </div>
                                <div className="flex items-center text-slate-600 text-sm bg-slate-50 p-3 rounded-2xl border border-slate-100">
                                    <Clock className="w-4 h-4 mr-3 text-blue-600" />
                                    <span className="font-bold">{booking.booking_time}</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center text-slate-600 text-sm bg-slate-50 p-3 rounded-2xl border border-slate-100">
                                    <MapPin className="w-4 h-4 mr-3 text-blue-600 shrink-0" />
                                    <span className="break-words">{booking.customer_address}</span>
                                </div>
                                <div className="flex items-center text-slate-600 text-sm bg-slate-50 p-3 rounded-2xl border border-slate-100">
                                    <Phone className="w-4 h-4 mr-3 text-blue-600" />
                                    <span>{booking.customer_phone}</span>
                                </div>
                            </div>
                        </div>

                        {booking.problem_description && (
                            <div className="mt-8 relative">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-100 rounded-full" />
                                <p className="text-slate-600 text-sm pl-6 leading-relaxed italic">
                                    &quot;{booking.problem_description}&quot;
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Right: Actions */}
                    <div className="w-full md:w-64 bg-slate-50/50 border-t md:border-t-0 md:border-l border-slate-100 p-8 flex flex-col gap-3 justify-center">
                        {booking.status === 'pending' && (
                            <Button
                                onClick={() => onStatusUpdate(booking.id, 'confirmed')}
                                className="w-full h-12 rounded-2xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-900/10 font-bold"
                            >
                                Bestätigen
                            </Button>
                        )}
                        {booking.status === 'confirmed' && (
                            <Button
                                onClick={() => onStatusUpdate(booking.id, 'completed')}
                                className="w-full h-12 rounded-2xl bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-900/10 font-bold"
                            >
                                Erledigt
                            </Button>
                        )}

                        <Button
                            variant="outline"
                            className="w-full h-12 rounded-2xl border-slate-200 bg-white hover:bg-slate-50 text-slate-600 font-bold group"
                            onClick={(e) => {
                                e.stopPropagation();
                                if (calendarLink && calendarLink !== '#') {
                                    window.open(calendarLink, '_blank');
                                } else {
                                    alert('Kalender-Link konnte nicht generiert werden.');
                                }
                            }}
                        >
                            <ExternalLink className="w-4 h-4 mr-2 text-slate-400 group-hover:text-blue-600 transition-colors" />
                            Kalender
                        </Button>

                        {booking.status !== 'rejected' && booking.status !== 'completed' && (
                            <Button
                                variant="ghost"
                                onClick={() => onStatusUpdate(booking.id, 'rejected')}
                                className="w-full h-12 rounded-2xl text-slate-400 hover:text-red-600 hover:bg-red-50 font-medium"
                            >
                                Ablehnen
                            </Button>
                        )}

                        <div className="mt-4 pt-4 border-t border-slate-100 flex justify-end">
                            <Button
                                size="sm"
                                variant="ghost"
                                className="text-slate-300 hover:text-red-600 hover:bg-red-50 rounded-lg p-2"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onDelete(booking.id);
                                }}
                            >
                                <Trash2 className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

const getGoogleCalendarLink = (booking: Booking) => {
    try {
        let year, month, day;
        if (booking.booking_date.includes('.')) {
            const parts = booking.booking_date.split('.');
            day = parseInt(parts[0]);
            month = parseInt(parts[1]);
            year = parseInt(parts[2]);
        }
        else if (booking.booking_date.includes('-')) {
            const parts = booking.booking_date.split('-');
            year = parseInt(parts[0]);
            month = parseInt(parts[1]);
            day = parseInt(parts[2]);
        } else return '#';

        const timeParts = booking.booking_time.replace(' Uhr', '').split(':');
        const hour = parseInt(timeParts[0]);
        const minute = parseInt(timeParts[1]);
        const startDate = new Date(year, month - 1, day, hour, minute);
        if (isNaN(startDate.getTime())) return '#';

        const endDate = new Date(startDate.getTime() + 60 * 60 * 1000);
        const formatForGoogle = (date: Date) => date.toISOString().replace(/-|:|\.\d\d\d/g, "");
        const details = `Kunde: ${booking.customer_name}\nTelefon: ${booking.customer_phone}\nAdresse: ${booking.customer_address}\n\nBeschreibung: ${booking.problem_description}`;
        return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(booking.service + " - " + booking.customer_name)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(booking.customer_address)}&dates=${formatForGoogle(startDate)}/${formatForGoogle(endDate)}`;
    } catch { return '#'; }
};

