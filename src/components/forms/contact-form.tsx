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
    <div className="pt-10">
      <div className="px-5 pb-5 border-b border-gray-400/35 mb-5">
        <h2 className="text-2xl font-medium">What do you need help with? </h2>
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
                    className="h-16 border-x-0 border-t-0 border-b border-gray-400/35 rounded-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 pl-5 text-base 2xl:text-lg"
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
                    className="h-16 border-x-0 border-t-0 border-b border-gray-400/35 rounded-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 pl-5 text-base 2xl:text-lg"
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
                    className="h-16 border-x-0 border-t-0 border-b border-gray-400/35 rounded-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 pl-5 text-base 2xl:text-lg"
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
                    className="border-x-0 border-t-0 border-none border-gray-400/35 rounded-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 px-5 text-base 2xl:text-lg h-48 2xl:h-72 overflow-y overflow-y-scroll"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="px-5 absolute left-0 right-0 bottom-8 border-t border-gray-400/35 pt-8">
            <Button
              className="h-20 w-full bg-sage hover:bg-sage/90 text-white text-base 2xl:text-lg"
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
