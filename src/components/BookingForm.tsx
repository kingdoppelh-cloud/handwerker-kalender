'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Calendar, Clock, ArrowRight, Home, Mail } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { db } from '@/lib/db';
import { toast } from 'sonner';

const formSchema = z.object({
    service: z.string().min(1, 'Bitte wählen Sie eine Dienstleistung'),
    date: z.string().min(1, 'Bitte wählen Sie ein Datum'),
    time: z.string().min(1, 'Bitte wählen Sie eine Uhrzeit'),
    name: z.string().min(2, 'Name ist zu kurz'),
    email: z.string().email('Ungültiges E-Mail-Format').optional().or(z.literal('')),
    phone: z.string().min(6, 'Telefonnummer ist ungültig'),
    address: z.string().min(5, 'Adresse ist zu kurz'),
    description: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const services = [
    { label: 'Beratung / Angebot vor Ort', value: 'beratung' },
    { label: 'Reparatur / Störung', value: 'reparatur' },
    { label: 'Wartung / Service', value: 'wartung' },
    { label: 'Sonstiges', value: 'sonstiges' }
];

const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'
];

export default function BookingForm() {
    const [isLoading, setIsLoading] = useState(false);
    const today = new Date().toISOString().split('T')[0];
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormValues) => {
        setIsLoading(true);
        try {
            // Lokal speichern in Dexie (Offline-First)
            await db.appointments.add({
                service: data.service,
                date: data.date,
                time: data.time,
                name: data.name,
                email: data.email,
                phone: data.phone,
                address: data.address,
                description: data.description,
                status: 'pending',
                createdAt: new Date().toISOString()
            });

            const response = await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error('Fehler');

            toast.success("Termin gebucht & Bestätigung an Kunden gesendet! ✨");

            // Redirect to success page for premium experience
            router.push('/success');
        } catch (error) {
            console.error('Booking error:', error);
            toast.error("Entschuldigung, es gab ein Problem bei der Buchung.");
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <Card className="rounded-[40px] border-none shadow-2xl shadow-blue-900/10 overflow-hidden animate-fade-in">
            <div className="bg-slate-900 p-8 text-white relative">
                <div className="relative z-10">
                    <h2 className="text-2xl font-bold tracking-tight">Termin vereinbaren</h2>
                    <p className="text-slate-400 text-sm mt-1">Geben Sie hier Ihre Details ein.</p>
                </div>
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="p-8 space-y-8 bg-white/50 backdrop-blur-xl">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="service" className="text-xs font-black uppercase tracking-widest text-slate-400">Dienstleistung</Label>
                            <select
                                id="service"
                                {...register('service')}
                                className="flex h-14 w-full rounded-2xl border border-slate-200 bg-white/50 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all appearance-none"
                            >
                                <option value="">Bitte wählen...</option>
                                {services.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                            </select>
                            {errors.service && <p className="text-xs text-red-500 font-medium">{errors.service.message}</p>}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="date" className="text-xs font-black uppercase tracking-widest text-slate-400">Datum</Label>
                                <div className="relative">
                                    <Input
                                        id="date"
                                        type="date"
                                        min={today}
                                        {...register('date')}
                                        className="h-14 pl-12 rounded-2xl border-slate-200 bg-white/50 focus:ring-blue-600/20"
                                    />
                                    <Calendar className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
                                </div>
                                {errors.date && <p className="text-xs text-red-500 font-medium">{errors.date.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="time" className="text-xs font-black uppercase tracking-widest text-slate-400">Uhrzeit</Label>
                                <div className="relative">
                                    <select
                                        id="time"
                                        {...register('time')}
                                        className="flex h-14 w-full rounded-2xl border border-slate-200 bg-white/50 pl-12 pr-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all appearance-none"
                                    >
                                        <option value="">Wählen...</option>
                                        {timeSlots.map(t => <option key={t} value={t}>{t} Uhr</option>)}
                                    </select>
                                    <Clock className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
                                </div>
                                {errors.time && <p className="text-xs text-red-500 font-medium">{errors.time.message}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 space-y-4">
                        <Label className="text-xs font-black uppercase tracking-widest text-slate-400">Persönliche Daten</Label>
                        <div className="space-y-4">
                            <div className="relative">
                                <Input id="name" {...register('name')} placeholder="Max Mustermann" className="h-14 pl-12 rounded-2xl border-slate-200 bg-white/50" />
                                <Home className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
                            </div>
                            <div className="relative">
                                <Input id="email" type="email" {...register('email')} placeholder="kunde@beispiel.de" className="h-14 pl-12 rounded-2xl border-slate-200 bg-white/50" />
                                <Mail className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
                            </div>
                            <Input id="phone" {...register('phone')} placeholder="+49 123 4567890" className="h-14 rounded-2xl border-slate-200 bg-white/50" />
                            <Input id="address" {...register('address')} placeholder="Hauptstraße 1, 12345 Berlin" className="h-14 rounded-2xl border-slate-200 bg-white/50" />
                            <Textarea
                                id="description"
                                {...register('description')}
                                placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                                className="rounded-2xl border-slate-200 bg-white/50 min-h-[120px]"
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-16 rounded-2xl bg-blue-600 hover:bg-blue-700 text-lg font-bold shadow-xl shadow-blue-900/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                        {isLoading ? 'Wird gesendet...' : 'Anfrage verbindlich senden'}
                        {!isLoading && <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />}
                    </Button>

                    <p className="text-[10px] text-center text-slate-400 font-medium">
                        Ihre Daten werden verschlüsselt übertragen. Meisterbetrieb-Qualität garantiert.
                    </p>
                </CardContent>
            </form>
        </Card>
    );
}
