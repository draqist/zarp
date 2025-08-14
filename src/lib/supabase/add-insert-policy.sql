-- Add missing INSERT policy for users table
-- This script only adds the INSERT policy that was missing

-- Check if the INSERT policy already exists
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies 
        WHERE tablename = 'users' 
        AND policyname = 'Users can insert own profile'
        AND schemaname = 'public'
    ) THEN
        -- Create the missing INSERT policy
        CREATE POLICY "Users can insert own profile" ON public.users
          FOR INSERT WITH CHECK (auth.uid() = id);
        
        RAISE NOTICE 'INSERT policy created successfully';
    ELSE
        RAISE NOTICE 'INSERT policy already exists';
    END IF;
END $$;

-- Verify all policies for users table
SELECT 
    policyname,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE tablename = 'users' 
AND schemaname = 'public'
ORDER BY policyname; 