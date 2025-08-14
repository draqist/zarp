"use client";

import { usePostLogin } from "@/app/api/mutation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/lib/hooks/use-auth";
import { authSchema, AuthSchema } from "@/lib/schema/auth-scema";
import { handleOAuth } from "@/lib/supabase/helpers";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Linkedin, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const { mutateAsync: login, isPending } = usePostLogin();
  const { signInWithOAuth, isLoading } = useAuth();

  const handleSignInWithOAuth = async (
    provider: "google" | "linkedin_oidc"
  ) => {
    await signInWithOAuth(provider);
    // User data will be automatically inserted in the OAuth callback
  };
  const onSubmit = async (data: AuthSchema) => {
    await login(data);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border-none shadow-none">
        <CardHeader className="flex flex-col gap-3 items-center">
          <CardTitle className="text-traq-black text-5xl font-medium font-livret-sans">
            Welcome Back
          </CardTitle>
          <CardDescription>
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 w-full flex-grow">
                    <Button
                      variant="outline"
                      className="h-12 rounded-none flex-grow"
                      onClick={() => handleSignInWithOAuth("linkedin_oidc")}
                      type="button"
                      disabled={isLoading}
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      className="h-12 rounded-none flex-grow"
                      onClick={() => handleOAuth("google")}
                      type="button"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                              fill="currentColor"
                            />
                          </svg>
                          Google
                        </>
                      )}
                    </Button>
                  </div>
                </div>
                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                  <span className="bg-card text-muted-foreground relative z-10 px-2">
                    Or continue with
                  </span>
                </div>

                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-2">
                        <FormLabel
                          htmlFor="email"
                          className="text-traq-black text-base font-medium"
                        >
                          Email
                        </FormLabel>
                        <FormControl className="h-12 rounded-[12px] focus-visible:ring-0 focus-visible:ring-offset-0">
                          <Input
                            id="email"
                            type="email"
                            placeholder="m@example.com"
                            className="h-12 rounded-[12px] focus-visible:ring-0 focus-visible:ring-offset-0"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="flex flex-col gap-2">
                        <FormLabel
                          htmlFor="password"
                          className="text-traq-black text-base font-medium"
                        >
                          Password
                        </FormLabel>
                        <FormControl className="h-12 rounded-[12px] focus-visible:ring-0 focus-visible:ring-offset-0">
                          <div className="flex items-center border rounded-[12px]">
                            <Input
                              id="password"
                              type={showPassword ? "text" : "password"}
                              placeholder="********"
                              className="h-12 rounded-[12px] border-none rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
                              {...field}
                            />
                            <Button
                              variant="outline"
                              className="h-12 rounded-[12px] border-l-none border-r-none shadow-none rounded-l-none"
                              onClick={() => setShowPassword(!showPassword)}
                              type="button"
                            >
                              {showPassword ? (
                                <EyeOff className="w-4 h-4" />
                              ) : (
                                <Eye className="w-4 h-4" />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <FormField
                        control={form.control}
                        name="remember"
                        render={({ field }) => (
                          <FormItem className="flex flex-row-reverse items-center gap-2">
                            <FormLabel
                              htmlFor="remember"
                              className="text-traq-black text-sm font-medium"
                            >
                              Remember me
                            </FormLabel>
                            <FormControl>
                              <Checkbox
                                id="remember"
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <Link
                      href="/forgot-password"
                      className="text-traq-black text-sm font-medium"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-4">
                  <Button
                    type="submit"
                    className="w-full h-12 rounded-[12px]"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      "Sign in"
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
