"use client";

import { ContactFormSchema, contactFormSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  return (
    <div className="pt-10 relative">
      <div className="px-5 pb-2 border-b-2 border-gray-400/35 mb-5">
        <h2 className="text-2xl font-medium">Reach us </h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => console.log(data))}
          className="space-y-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Full Name* :"
                    value={field.value}
                    onChange={field.onChange}
                    className="h-16 border-x-0 border-t-0 border-b border-gray-400/35 rounded-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 pl-5 md:text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email Address* :"
                    value={field.value}
                    onChange={field.onChange}
                    className="h-16 border-x-0 border-t-0 border-b border-gray-400/35 rounded-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 pl-5 md:text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    id="phone"
                    type="number"
                    placeholder="Phone Number :"
                    value={field.value}
                    onChange={field.onChange}
                    className="h-16 border-x-0 border-t-0 border-b-2 border-gray-400/35 rounded-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 pl-5 md:text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?* :"
                    value={field.value}
                    onChange={field.onChange}
                    className="border-x-0 border-t-0 border-b-2 border-gray-400/35 rounded-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 pl-5 md:text-lg min-h-[326.5px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="px-5 mt-10">
            <Button
              className="h-20 w-full bg-sage hover:bg-sage/90 text-white md:text-lg"
              type="submit"
              disabled={false}
            >
              Send Message
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
