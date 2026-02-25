-- Vibrans Barbershop Database Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Services Table
CREATE TABLE IF NOT EXISTS public.services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    duration_minutes INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Barbers Table
CREATE TABLE IF NOT EXISTS public.barbers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT NOT NULL,
    specialty TEXT,
    avatar_url TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Users/Profiles Table (Linked to Auth)
CREATE TABLE IF NOT EXISTS public.users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT,
    phone TEXT,
    email TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Memberships Table
CREATE TABLE IF NOT EXISTS public.memberships (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL, -- Silver, Gold, Platinum
    description TEXT,
    price_monthly DECIMAL(10, 2) NOT NULL,
    benefits JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Appointments Table
CREATE TABLE IF NOT EXISTS public.appointments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.users(id),
    service_id UUID REFERENCES public.services(id),
    barber_id UUID REFERENCES public.barbers(id),
    scheduled_at TIMESTAMP WITH TIME ZONE NOT NULL,
    status TEXT DEFAULT 'scheduled', -- scheduled, completed, cancelled, waitlist
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Vibrans Notes (Clip Notes)
CREATE TABLE IF NOT EXISTS public.vibrans_notes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.users(id),
    barber_id UUID REFERENCES public.barbers(id),
    notes TEXT NOT NULL, -- e.g. "Guard 2 on sides, trim top"
    technical_details JSONB, -- { guide_length: "2", style: "fade" }
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS POLICIES --

ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Services are viewable by everyone" ON public.services FOR SELECT USING (true);

ALTER TABLE public.barbers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Barbers are viewable by everyone" ON public.barbers FOR SELECT USING (true);

ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own profile" ON public.users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON public.users FOR UPDATE USING (auth.uid() = id);

ALTER TABLE public.memberships ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Memberships are viewable by everyone" ON public.memberships FOR SELECT USING (true);

ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own appointments" ON public.appointments FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own appointments" ON public.appointments FOR INSERT WITH CHECK (auth.uid() = user_id);

ALTER TABLE public.vibrans_notes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own notes" ON public.vibrans_notes FOR SELECT USING (auth.uid() = user_id);

-- SEED DATA --

-- Seed Services
INSERT INTO public.services (name, description, price, duration_minutes) VALUES
('Classic Haircut', 'Precision cut with scissors and clippers.', 30.00, 30),
('Beard Trim', 'Shaping and grooming for the perfect beard.', 20.00, 20),
('Hot Towel Shave', 'Traditional straight razor shave.', 35.00, 45),
('Vibrans Special', 'Haircut + Beard Trim + Hot Towel.', 55.00, 75);

-- Seed Barbers
INSERT INTO public.barbers (full_name, specialty, avatar_url) VALUES
('Alex Rivera', 'Fades & Edges', 'https://example.com/barbers/alex.jpg'),
('Sam Chen', 'Classic Scissors', 'https://example.com/barbers/sam.jpg'),
('Jordan Smith', 'Beard Grooming', 'https://example.com/barbers/jordan.jpg');

-- Seed Memberships
INSERT INTO public.memberships (name, description, price_monthly, benefits) VALUES
('Silver', '2 Haircuts per month', 50.00, '{"haircuts": 2, "discount": 0}'),
('Gold', 'Unlimited Haircuts + 1 Beard Trim', 80.00, '{"haircuts": "unlimited", "beard_trim": 1}'),
('Platinum', 'All inclusive + Priority Booking', 120.00, '{"haircuts": "unlimited", "priority": true}');
