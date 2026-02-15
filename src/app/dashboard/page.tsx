'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, ExternalLink, LogOut, Trash2, Home } from 'lucide-react';
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
        <div className="min-h-screen bg-slate-50">
            <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-slate-400 hover:text-slate-600 transition-colors">
                            <Home className="h-5 w-5" />
                        </Link>
                        <h1 className="text-xl font-bold text-[#1E40AF]">Dashboard</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" onClick={handleLogout} className="text-slate-600 font-medium">
                            <LogOut className="h-4 w-4 mr-2" />
                            Abmelden
                        </Button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
                    <TabButton
                        active={activeTab === 'pending'}
                        onClick={() => setActiveTab('pending')}
                        label="Neue Anfragen"
                        count={bookings.filter(b => b.status === 'pending').length}
                    />
                    <TabButton
                        active={activeTab === 'confirmed'}
                        onClick={() => setActiveTab('confirmed')}
                        label="Bestätigt"
                        count={bookings.filter(b => b.status === 'confirmed').length}
                    />
                    <TabButton
                        active={activeTab === 'completed'}
                        onClick={() => setActiveTab('completed')}
                        label="Erledigt"
                        count={bookings.filter(b => b.status === 'completed').length}
                    />
                </div>

                {loading ? (
                    <div className="text-center py-20 text-slate-500">Lade Buchungen...</div>
                ) : (
                    <div className="grid gap-6">
                        {filteredBookings.length === 0 ? (
                            <div className="text-center py-12 bg-white rounded-lg border border-dashed border-slate-300">
                                <p className="text-slate-500">Keine Buchungen in dieser Kategorie gefunden.</p>
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

function TabButton({ active, onClick, label, count }: { active: boolean, onClick: () => void, label: string, count: number }) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2 ${active
                ? 'bg-[#1E40AF] text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
        >
            {label}
            <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${active ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                {count}
            </span>
        </button>
    );
}

const getGoogleCalendarLink = (booking: Booking) => {
    try {
        let year, month, day;

        // Handle DD.MM.YYYY
        if (booking.booking_date.includes('.')) {
            const parts = booking.booking_date.split('.');
            day = parseInt(parts[0]);
            month = parseInt(parts[1]);
            year = parseInt(parts[2]);
        }
        // Handle YYYY-MM-DD
        else if (booking.booking_date.includes('-')) {
            const parts = booking.booking_date.split('-');
            year = parseInt(parts[0]);
            month = parseInt(parts[1]);
            day = parseInt(parts[2]);
        } else {
            return '#';
        }

        const timeParts = booking.booking_time.replace(' Uhr', '').split(':');
        const hour = parseInt(timeParts[0]);
        const minute = parseInt(timeParts[1]);

        const startDate = new Date(year, month - 1, day, hour, minute);

        if (isNaN(startDate.getTime())) {
            return '#';
        }

        const endDate = new Date(startDate.getTime() + 60 * 60 * 1000);

        const formatForGoogle = (date: Date) => date.toISOString().replace(/-|:|\.\d\d\d/g, "");

        const details = `Kunde: ${booking.customer_name}\nTelefon: ${booking.customer_phone}\nAdresse: ${booking.customer_address}\n\nBeschreibung: ${booking.problem_description}`;

        return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(booking.service + " - " + booking.customer_name)}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(booking.customer_address)}&dates=${formatForGoogle(startDate)}/${formatForGoogle(endDate)}`;
    } catch (e) {
        return '#';
    }
};

// Define statusColors for the new Badge usage
const statusColors: Record<Booking['status'], string> = {
    pending: 'bg-amber-100 text-amber-700 border-amber-200',
    confirmed: 'bg-blue-100 text-blue-700 border-blue-200',
    completed: 'bg-green-100 text-green-700 border-green-200',
    rejected: 'bg-red-100 text-red-700 border-red-200',
};

function BookingCard({ booking, onStatusUpdate, onDelete }: { booking: Booking, onStatusUpdate: (id: string, status: string) => void, onDelete: (id: string) => void }) {
    const calendarLink = getGoogleCalendarLink(booking);

    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-0">
                <div className="p-4 border-b border-slate-100">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">{booking.customer_name}</h3>
                            <p className="text-sm text-blue-600 font-medium">{booking.service}</p>
                        </div>
                        {/* Updated Badge usage */}
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${statusColors[booking.status]} capitalize`}>
                            {booking.status === 'pending' ? 'Neu' : booking.status === 'confirmed' ? 'Bestätigt' : booking.status === 'completed' ? 'Erledigt' : 'Abgelehnt'}
                        </span>
                    </div>
                    <div className="flex space-x-4 text-sm text-slate-500">
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {booking.booking_date}
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {booking.booking_time}
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-slate-50">
                    <div className="flex items-center text-sm text-slate-600 mb-2">
                        <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                        {booking.customer_address}
                    </div>
                    {booking.problem_description && (
                        <p className="text-sm text-slate-600 italic border-l-2 border-slate-200 pl-3 mb-4">
                            "{booking.problem_description}"
                        </p>
                    )}
                    <div className="flex flex-wrap gap-2">
                        {booking.status === 'pending' && (
                            <Button size="sm" onClick={() => onStatusUpdate(booking.id, 'confirmed')} className="bg-emerald-600 hover:bg-emerald-700">
                                Bestätigen
                            </Button>
                        )}
                        {booking.status === 'confirmed' && (
                            <Button size="sm" onClick={() => onStatusUpdate(booking.id, 'completed')} className="bg-blue-600 hover:bg-blue-700">
                                Erledigt
                            </Button>
                        )}
                        {booking.status !== 'rejected' && booking.status !== 'completed' && (
                            <Button size="sm" variant="outline" onClick={() => onStatusUpdate(booking.id, 'rejected')} className="text-red-600 border-red-200 hover:bg-red-50">
                                Ablehnen
                            </Button>
                        )}
                        <Button
                            size="sm"
                            variant="ghost"
                            className="text-slate-600"
                            onClick={(e) => {
                                e.stopPropagation();
                                if (calendarLink && calendarLink !== '#') {
                                    window.open(calendarLink, '_blank');
                                } else {
                                    alert('Kalender-Link konnte nicht generiert werden. Prüfen Sie bitte Datum und Uhrzeit.');
                                }
                            }}
                        >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Google Kalender
                        </Button>
                        <div className="flex-1" />
                        <Button
                            size="sm"
                            variant="ghost"
                            className="text-red-400 hover:text-red-600 hover:bg-red-50"
                            onClick={(e) => {
                                e.stopPropagation();
                                onDelete(booking.id);
                            }}
                        >
                            <Trash2 className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

