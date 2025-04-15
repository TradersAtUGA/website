"use client";

import Image from "next/image";
import ContactUsForm from "@/components/contact/ContactUsForm";
import { macros } from "@/macros";
import "@/styles/animations.css";

export default function Page() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] flex flex-col sm:flex-row gap-24 items-center sm:items-start min-h-[80vh] justify-center pt-36 px-8 max-4xl mx-auto">
      <div className="flex flex-col gap-4 text-center sm:text-left fade-in-left">
        {/* <Image
          src="https://placehold.co/800"
          alt="Join Us"
          width={800}
          height={800}
          className="rounded-lg fade-in-left w-[400px] h-[400px] object-cover"
        /> */}
        <div className="flex flex-col gap-4 max-w-lg  text-lg">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p>
            We’re seeking driven individuals with a solid foundation in finance,
            programming, or data analysis who are ready to contribute, grow, and
            push boundaries. At Traders@UGA, you’ll gain access to exclusive
            workshops, mentorship, and networking opportunities while working on
            meaningful projects that shape the future of finance.
          </p>
          <p className="font-semibold">
            If you’re ready to work hard, innovate, and make a difference, join
            us at Traders@UGA. Your next big project starts here!
          </p>
          <h2
            className="text-xl font-bold rounded-md bg-background "
            style={{
              backgroundColor: macros.background,
              color: macros.textColor,
            }}
          >
            Please send an email to
            <a
              href="#"
              className="text-blue-500 mx-1 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(macros.email);
                alert("Email address copied to clipboard!");
              }}
            >
              {macros.email}
            </a>
            for any inquiries. We look forward to hearing from you!
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center fade-in-right text-center sm:text-left max-w-lg">
        <Image
          src="/contact.jpeg"
          alt="About Us"
          width={300}
          height={400}
          className="overflow-hidden w-[300px] h-[400px] rounded-lg
                  object-cover"
        />
        {/* <ContactUsForm /> */}
      </div>
    </div>
  );
}
