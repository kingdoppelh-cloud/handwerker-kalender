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
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const formSchema = z.object({
    service: z.string().min(1, 'Bitte wählen Sie eine Dienstleistung'),
    date: z.string().min(1, 'Bitte wählen Sie ein Datum'),
    time: z.string().min(1, 'Bitte wählen Sie eine Uhrzeit'),
    name: z.string().min(2, 'Name ist zu kurz'),
    phone: z.string().min(6, 'Telefonnummer ist ungültig'),
    address: z.string().min(5, 'Adresse ist zu kurz'),
    description: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const services = [
    'Notdienst',
    'Reparatur',
    'Neuinstallation',
    'Beratung'
];

// Mock-Zeitslots (später dynamisch)
const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'
];

export default function BookingForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormValues) => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Netzwerk-Antwort war nicht ok');
            }

            setIsSubmitted(true);
        } catch (error) {
            console.error('Fehler bei der Buchung:', error);
            alert('Entschuldigung, es gab ein Problem bei der Buchung. Bitte versuchen Sie es später erneut.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <Card className="border-green-100 bg-green-50">
                <CardContent className="pt-6 pb-6 text-center">
                    <CheckCircle className="mx-auto h-12 w-12 text-green-600 mb-4" />
                    <h2 className="text-xl font-semibold text-green-900 mb-2">Anfrage erfolgreich gesendet!</h2>
                    <p className="text-green-700">Wir haben Ihre Buchungsanfrage erhalten und melden uns in Kürze zur Bestätigung per E-Mail oder Telefon bei Ihnen.</p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center mt-6">
                        <Button
                            variant="primary"
                            onClick={() => setIsSubmitted(false)}
                        >
                            Neue Buchung
                        </Button>
                        <Button
                            variant="outline"
                            onClick={() => window.location.href = '/'}
                        >
                            Zur Startseite
                        </Button>
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="shadow-lg overflow-hidden border-slate-200">
            <form onSubmit={handleSubmit(onSubmit)}>
                <CardContent className="p-6 space-y-6">
                    {/* Service Auswahl */}
                    <div className="space-y-2">
                        <Label htmlFor="service">Dienstleistung</Label>
                        <select
                            id="service"
                            {...register('service')}
                            className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF]"
                        >
                            <option value="">Bitte wählen...</option>
                            {services.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        {errors.service && <p className="text-xs text-red-500">{errors.service.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Datum */}
                        <div className="space-y-2">
                            <Label htmlFor="date">Datum</Label>
                            <div className="relative">
                                <Input
                                    id="date"
                                    type="date"
                                    {...register('date')}
                                    className="pl-10"
                                />
                                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                            </div>
                            {errors.date && <p className="text-xs text-red-500">{errors.date.message}</p>}
                        </div>

                        {/* Uhrzeit */}
                        <div className="space-y-2">
                            <Label htmlFor="time">Uhrzeit</Label>
                            <div className="relative">
                                <select
                                    id="time"
                                    {...register('time')}
                                    className="flex h-10 w-full rounded-md border border-slate-200 bg-white pl-10 pr-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E40AF]"
                                >
                                    <option value="">Wählen...</option>
                                    {timeSlots.map(t => <option key={t} value={t}>{t} Uhr</option>)}
                                </select>
                                <Clock className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                            </div>
                            {errors.time && <p className="text-xs text-red-500">{errors.time.message}</p>}
                        </div>
                    </div>

                    <hr className="border-slate-100" />

                    {/* Kontaktdaten */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Vollständiger Name</Label>
                            <Input id="name" {...register('name')} placeholder="Max Mustermann" />
                            {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Telefonnummer</Label>
                            <Input id="phone" {...register('phone')} placeholder="+49 123 4567890" />
                            {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="address">Anschrift (Einsatzort)</Label>
                            <Input id="address" {...register('address')} placeholder="Hauptstraße 1, 12345 Berlin" />
                            {errors.address && <p className="text-xs text-red-500">{errors.address.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Beschreibung des Problems</Label>
                            <Textarea
                                id="description"
                                {...register('description')}
                                placeholder="Bitte beschreiben Sie kurz, was genau repariert werden muss..."
                            />
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="w-full text-lg h-12"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Wird gesendet...' : 'Jetzt verbindlich buchen'}
                    </Button>
                    <p className="text-[10px] text-center text-slate-400">
                        Mit der Buchung akzeptieren Sie unsere AGB und Datenschutzbestimmungen.
                    </p>
                </CardContent>
            </form>
        </Card>
    );
}
