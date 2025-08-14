"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export function useAuth() {
  const supabase = createClient();
  const router = useRouter();
  const hasInsertedData = useRef(false);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session?.user && !hasInsertedData.current) {
        // Handle user data insertion for email/password signups only
        const userMetadata = session.user.user_metadata;

        // Check if this is an email signup (has our custom metadata)
        // and we haven't already inserted data for this session
        if (userMetadata?.first_name || userMetadata?.last_name) {
          try {
            // Create a server action or API call to handle user data insertion
            const response = await fetch("/api/auth/insert-user-data", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId: session.user.id,
              }),
            });

            if (!response.ok) {
              console.error("Failed to insert user data");
            } else {
              // Mark that we've inserted data for this session
              hasInsertedData.current = true;
            }
          } catch (error) {
            console.error("Error inserting user data:", error);
          }
        }
      }

      // Reset the flag when user signs out
      if (event === "SIGNED_OUT") {
        hasInsertedData.current = false;
      }
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth, router]);

  return { supabase };
}
