import { ErrorToast } from "@/components/global/toasts";
import { createClient } from "./client";

const supabase = createClient();

export const handleOAuth = async (provider: "google" | "linkedin_oidc") => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (error) {
      ErrorToast("Error signing in with OAuth", error.message);
      return;
    }
    return { data, error };
  } catch (error) {
    ErrorToast("Error signing in with OAuth", error as string);
  }
};

export const handleUserProfile = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    ErrorToast("Error getting user profile", error.message);
    return;
  }
  return data;
};

export const handleSignOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    ErrorToast("Error signing out", error.message);
    return;
  } else {
    window.location.href = "/login";
  }
};
