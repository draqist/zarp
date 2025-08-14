-- 1️⃣ USERS
-- We extend Supabase's built-in auth.users table
-- No need to store passwords here — handled by Supabase Auth

-- USER ROLES ENUM
CREATE TYPE user_role AS ENUM ('customer', 'vendor', 'driver', 'admin');

-- PROFILES TABLE (linked to auth.users)
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT NOT NULL,
    phone_number TEXT,
    role user_role NOT NULL DEFAULT 'customer',
    created_at TIMESTAMP DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view their own profile"
    ON public.profiles
    FOR SELECT
    USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
    ON public.profiles
    FOR UPDATE
    USING (auth.uid() = id);

-- 2️⃣ VENDOR PROFILES
CREATE TABLE public.vendor_profiles (
    id UUID PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
    store_name TEXT NOT NULL,
    location TEXT,
    contact_email TEXT,
    contact_phone TEXT,
    created_at TIMESTAMP DEFAULT now()
);

ALTER TABLE public.vendor_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Vendors can manage their profile"
    ON public.vendor_profiles
    FOR ALL
    USING (auth.uid() = id);

-- 3️⃣ DRIVER PROFILES
CREATE TABLE public.driver_profiles (
    id UUID PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
    vehicle_type TEXT NOT NULL,
    license_plate TEXT NOT NULL,
    preferred_routes TEXT[], -- Array of route names or IDs
    created_at TIMESTAMP DEFAULT now()
);

ALTER TABLE public.driver_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Drivers can manage their profile"
    ON public.driver_profiles
    FOR ALL
    USING (auth.uid() = id);

-- 4️⃣ ORDERS
CREATE TYPE order_status AS ENUM ('pending', 'accepted', 'in_transit', 'delivered', 'cancelled');

CREATE TABLE public.orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    customer_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    vendor_id UUID REFERENCES public.vendor_profiles(id) ON DELETE SET NULL,
    driver_id UUID REFERENCES public.driver_profiles(id) ON DELETE SET NULL,
    pickup_address TEXT NOT NULL,
    delivery_address TEXT NOT NULL,
    package_details TEXT,
    status order_status NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT now()
);

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Customers can see their orders"
    ON public.orders
    FOR SELECT
    USING (auth.uid() = customer_id);

CREATE POLICY "Vendors can see their orders"
    ON public.orders
    FOR SELECT
    USING (auth.uid() = vendor_id);

CREATE POLICY "Drivers can see assigned orders"
    ON public.orders
    FOR SELECT
    USING (auth.uid() = driver_id);

-- 5️⃣ ORDER STATUS UPDATES
CREATE TABLE public.order_status_updates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE,
    status order_status NOT NULL,
    updated_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    note TEXT,
    created_at TIMESTAMP DEFAULT now()
);

ALTER TABLE public.order_status_updates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view updates for their orders"
    ON public.order_status_updates
    FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.orders
            WHERE id = order_id
            AND (customer_id = auth.uid() OR vendor_id = auth.uid() OR driver_id = auth.uid())
        )
    );

-- 6️⃣ PAYMENTS (Optional for Scaling)
CREATE TABLE public.payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE,
    amount NUMERIC(10, 2) NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending',
    payment_method TEXT,
    created_at TIMESTAMP DEFAULT now()
);

ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can see payments for their orders"
    ON public.payments
    FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.orders
            WHERE id = order_id
            AND (customer_id = auth.uid() OR vendor_id = auth.uid())
        )
    );

-- 7️⃣ ROUTES (Optional)
CREATE TABLE public.routes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    driver_id UUID REFERENCES public.driver_profiles(id) ON DELETE CASCADE,
    origin TEXT NOT NULL,
    destination TEXT NOT NULL,
    frequency TEXT, -- daily, weekly, etc.
    created_at TIMESTAMP DEFAULT now()
);

ALTER TABLE public.routes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Drivers can manage their routes"
    ON public.routes
    FOR ALL
    USING (auth.uid() = driver_id);
