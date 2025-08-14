import type { SupabaseClient, User } from "@supabase/supabase-js";

/**
 * Handles OAuth user data insertion into the users table (server-side)
 * @param supabase - Supabase client instance
 * @param user - User object from Supabase auth
 * @returns Promise with success status and any error
 */
export async function handleOAuthUserData(
  supabase: SupabaseClient,
  user: User
) {
  try {
    const userMetadata = user.user_metadata;

    // Extract user data from OAuth metadata
    const userData = {
      id: user.id,
      email: user.email,
      first_name:
        userMetadata?.given_name || userMetadata?.name?.split(" ")[0] || null,
      last_name:
        userMetadata?.family_name ||
        userMetadata?.name?.split(" ").slice(1).join(" ") ||
        null,
      role: userMetadata?.role || "customer",
      phone_number: userMetadata?.phone_number || null,
    };

    // First, check if user already exists
    const { data: existingUser, error: checkError } = await supabase
      .from("profiles")
      .select("id, email")
      .eq("id", user.id)
      .single();

    if (checkError && checkError.code !== "PGRST116") {
      // PGRST116 = no rows returned
      console.error("Error checking existing user:", checkError);
      return { success: false, error: checkError };
    }

    if (existingUser) {
      // User exists, update their data
      const { error: updateError } = await supabase
        .from("profiles")
        .update(userData)
        .eq("id", user.id);

      if (updateError) {
        console.error("Error updating user data:", updateError);
        return { success: false, error: updateError };
      }
    } else {
      // User doesn't exist, insert new user
      const { error: insertError } = await supabase
        .from("profiles")
        .insert(userData);

      if (insertError) {
        console.error("Error inserting user data:", insertError);
        return { success: false, error: insertError };
      }
    }

    return { success: true, error: null };
  } catch (error) {
    console.error("Error handling OAuth user data:", error);
    return { success: false, error };
  }
}

/**
 * Handles email/password signup user data insertion into the users table (server-side)
 * @param supabase - Supabase client instance
 * @param user - User object from Supabase auth
 * @returns Promise with success status and any error
 */
export async function handleEmailSignupUserData(
  supabase: SupabaseClient,
  user: User
) {
  try {
    const userMetadata = user.user_metadata;

    // Extract user data from signup metadata
    const userData = {
      id: user.id,
      email: user.email,
      first_name: userMetadata?.first_name || null,
      last_name: userMetadata?.last_name || null,
      linkedin_profile: userMetadata?.linkedin_profile || null,
      resume_url: userMetadata?.resume_url || null,
      avatar_url: userMetadata?.avatar_url || null,
    };

    // First, check if user already exists
    const { data: existingUser, error: checkError } = await supabase
      .from("profiles")
      .select("id, email")
      .eq("id", user.id)
      .single();

    if (checkError && checkError.code !== "PGRST116") {
      // PGRST116 = no rows returned
      console.error("Error checking existing user:", checkError);
      return {
        success: false,
        error: checkError,
        message: "User check failed",
      };
    }

    if (existingUser) {
      // User exists, update their data
      return {
        success: true,
        error: null,
        message: "User already exists",
      };
    } else {
      // User doesn't exist, insert new user
      const { error: insertError } = await supabase
        .from("profiles")
        .insert(userData);

      if (insertError) {
        console.error("Error inserting user data:", insertError);
        return {
          success: false,
          error: insertError,
          message: "User creation failed",
        };
      }
    }

    return {
      success: true,
      error: null,
      message: "User created successfully",
    };
  } catch (error) {
    console.error("Error handling email signup user data:", error);
    return {
      success: false,
      error,
      message: "User creation failed",
    };
  }
}
