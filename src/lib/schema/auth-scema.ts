import { z } from "zod";

export const authSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  remember: z.boolean().optional(),
});

export type AuthSchema = z.infer<typeof authSchema>;

export const SignUpSchema = z.object({
  first_name: z.string().min(1, { message: "First name is required" }),
  last_name: z.string().min(1, { message: "Last name is required" }),
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  confirm_password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  linkedin_url: z.url({
    // protocol: /^https?$/,
    hostname: /^www\.linkedin\.com$/,
    message: "Invalid LinkedIn URL",
  }),
  resume_url: z.string().optional(),
  avatar_url: z.string().optional(),
});

export type SignUpSchema = z.infer<typeof SignUpSchema>;
