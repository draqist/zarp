import ContactForm from "@/components/forms/contact-form";
import Link from "next/link";

const ContactPage = () => {
  return (
    <main className="min-h-screen relative top-16">
      <div className="grid grid-cols-2 divide-x divide-gray-400/35 min-h-[calc(100vh-64px)]">
        <div className="col-span-1 pt-10 text-blac flex flex-col justify-between items-start">
          <div className="px-5">
            <h1 className="font-machina font-semibold text-3xl">
              Let’s Build Faster, Smarter Logistics Together
            </h1>
            <p className="mt-4 text-justify">
              Got questions, ideas, or partnership opportunities? We’d love to
              hear from you.
            </p>
          </div>
          <div className="p-5 space-y-4 border-t border-gray-400/35 w-full">
            Contact - Information
            <div className="flex flex-col items-start justify-between mt-2">
              <p>
                <span className="font-medium text-sm">
                  General Inquiries :{" "}
                  <Link href="mailto: support@zarp.com" className="font-light">
                    support@zarp.com
                  </Link>
                </span>
              </p>
              <p>
                <span className="font-medium text-sm">
                  Business partnerships :{" "}
                  <Link href="mailto: biz@zarp.com" className="font-light">
                    biz@zarp.com
                  </Link>
                </span>
              </p>
              <p>
                <span className="font-medium text-sm">
                  Press & media :{" "}
                  <Link href="mailto: press@zarp.com" className="font-light">
                    press@zarp.com
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
