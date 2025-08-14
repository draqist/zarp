"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { handleOAuth } from "../supabase/helpers";

export function useAuth() {
  const supabase = createClient();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const signInWithOAuth = async (provider: "google" | "linkedin_oidc") => {
    try {
      setIsLoading(true);
      const response = await handleOAuth(provider);

      if (response?.error) {
        console.error("Error signing in with OAuth:", response.error);
        return;
      }
      if (response?.data) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error signing in with OAuth:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { supabase, signInWithOAuth, isLoading };
}
