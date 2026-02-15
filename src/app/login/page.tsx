'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIn0.dummy'
    );

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError('Login fehlgeschlagen: ' + error.message);
            setLoading(false);
        } else {
            router.push('/dashboard');
            router.refresh();
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <Card className="w-full max-w-md shadow-xl border-slate-200">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold text-center text-[#1E40AF]">Admin Login</CardTitle>
                    <CardDescription className="text-center">
                        Melden Sie sich an, um Ihre Buchungen zu verwalten.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">E-Mail Adresse</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@beispiel.de"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Passwort</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && (
                            <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md border border-red-100">
                                {error}
                            </div>
                        )}
                        <Button className="w-full h-11" type="submit" disabled={loading}>
                            {loading ? 'Anmeldung...' : 'Einloggen'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
