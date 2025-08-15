"use client";

import { usePostSignUp } from "@/app/api/mutation";
import { ErrorToast, SuccessToast } from "@/components/global/toasts";
import Zarp from "@/components/global/traq";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useIsMobile } from "@/lib/hooks/use-mobile";
import { signUpSchema, SignUpSchemaType } from "@/lib/schema/auth-scema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function MobileRegisterForm() {
  const router = useRouter();
  const { mutateAsync: signUp, isPending } = usePostSignUp();
  const isMobile = useIsMobile();

  const onSubmit = async (data: SignUpSchemaType) => {
    try {
      await signUp(data);
      SuccessToast(
        "Account created successfully!",
        "Please check your email to verify your account."
      );
      router.push("/login");
    } catch (error) {
      if (error instanceof Error) {
        ErrorToast(
          "An unexpected error occurred",
          error.message || "An unexpected error occurred"
        );
      } else {
        ErrorToast(
          "An unexpected error occurred",
          "An unexpected error occurred"
        );
      }
    }
  };

  const form = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      phone_number: "",
      role: "customer",
    },
  });

  return (
    <div
      className="max-h-screen lg:px-32 lg:py-12 px-0 py-0 flex lg:flex-col justify-between items-end lg:items-center min-w-full"
      style={{
        backgroundImage: isMobile
          ? "url('/pawel-czerwinski-muJlB0u1rHo-unsplash.jpg')"
          : "",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ y: 500 }}
        animate={{ y: 0 }}
        transition={{ ease: "anticipate", duration: 2.5 }}
      >
        <Card className="w-full shadow-none gap-16 rounded-t-3xl rounded-b-none border border-white bg-white px-4 lg:px-0">
          <CardHeader className="space-y-1 px-0">
            <div className="flex justify-center mb-4">
              <Zarp color="#121212" />
            </div>
            <CardTitle className="text-3xl lg:text-5xl text-center font-livret-sans font-normal">
              Create your account
            </CardTitle>
            <CardDescription className="text-center text-xs lg:text-base">
              Enter your information to get started with{" "}
              <span className="font-medium font-livret-sans text-orange-400">
                {" "}
                Zarp{" "}
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="first_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First name</FormLabel>
                          <FormControl>
                            <Input
                              id="first_name"
                              type="text"
                              placeholder="John"
                              value={field.value}
                              onChange={field.onChange}
                              className="h-12 rounded-md focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="last_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last name</FormLabel>
                          <FormControl>
                            <Input
                              id="last_name"
                              type="text"
                              placeholder="Doe"
                              value={field.value}
                              onChange={field.onChange}
                              className="h-12 rounded-md focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={field.value}
                            onChange={field.onChange}
                            className="h-12 rounded-md focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Role</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value}
                            >
                              <SelectTrigger className="h-12  focus-visible:ring-0 focus-visible:ring-offset-0">
                                <SelectValue placeholder="Select role" />
                                <SelectContent>
                                  <SelectItem value="customer">
                                    Customer
                                  </SelectItem>
                                  <SelectItem value="vendor">Vendor</SelectItem>
                                </SelectContent>
                              </SelectTrigger>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="space-y-2 col-span-2 lg:col-span-3">
                    <FormField
                      control={form.control}
                      name="phone_number"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone number</FormLabel>
                          <FormControl>
                            <Input
                              id="phone_number"
                              type="text"
                              placeholder="08012345678"
                              value={field.value}
                              onChange={field.onChange}
                              className="h-12 rounded-md focus-visible:ring-0 focus-visible:ring-offset-0"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={field.value}
                            onChange={field.onChange}
                            className="h-12 rounded-md focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="confirm_password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm password</FormLabel>
                        <FormControl>
                          <Input
                            id="confirm_password"
                            type="password"
                            placeholder="••••••••"
                            value={field.value}
                            onChange={field.onChange}
                            className="h-12 rounded-md focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 rounded-md mt-4"
                  disabled={isPending}
                >
                  {isPending ? (
                    <Loader2 className="animate-spin w-4 h-4" />
                  ) : (
                    "Create account"
                  )}
                </Button>

                <div className="text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link href="/login" className="underline underline-offset-4">
                    Sign in
                  </Link>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
