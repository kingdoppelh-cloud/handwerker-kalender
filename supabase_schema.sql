-- Tabellen für HandwerkerKalender MVP

-- 1. Profile (Erweiterung der Auth-User)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  business_name TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS für Profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Profile sind für Besitzer lesbar" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Profile sind für Besitzer aktualisierbar" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- 2. Services (Dienstleistungen)
CREATE TABLE public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  duration_minutes INTEGER DEFAULT 60,
  user_id UUID REFERENCES public.profiles(id) DEFAULT auth.uid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS für Services
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Services sind öffentlich lesbar" ON public.services FOR SELECT USING (true);
CREATE POLICY "Handwerker verwaltet eigene Services" ON public.services FOR ALL USING (auth.uid() = user_id);

-- 3. Bookings (Buchungen)
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service TEXT NOT NULL,
  booking_date TEXT NOT NULL,
  booking_time TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_address TEXT,
  problem_description TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_id UUID REFERENCES auth.users DEFAULT auth.uid() -- Optional: Für Multi-Handwerker Support
);

-- RLS für Bookings
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- CRITICAL SECURITY FIX:
-- Nur authentifizierte Benutzer (Handwerker) können alle Buchungen sehen und verwalten
CREATE POLICY "Handwerker können alle Buchungen sehen" ON public.bookings
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Handwerker können Buchungen bearbeiten" ON public.bookings
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Handwerker können Buchungen löschen" ON public.bookings
  FOR DELETE USING (auth.role() = 'authenticated');

-- Kunden können Buchungen anonym erstellen (Insert)
CREATE POLICY "Jeder kann Buchungen erstellen" ON public.bookings
  FOR INSERT WITH CHECK (true);

-- Hilfsfunktion für Profile-Erstellung bei Signup (optional, aber empfohlen)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, business_name)
  VALUES (new.id, '');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger für automatische Profile-Erstellung
-- CREATE TRIGGER on_auth_user_created
--   AFTER INSERT ON auth.users
--   FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
