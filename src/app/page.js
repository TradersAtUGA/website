"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MemberList from "@/components/member/MemberList";
import { macros } from "@/macros";
import { BsPeopleFill } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import dynamic from "next/dynamic";
import "@/styles/animations.css";

const CanvasNestWrapper = dynamic(
  () => import("../components/CanvasNestWrapper"),
  { ssr: false }
);

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    // show element if it is visible, remains visible after set to true
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(domRef.current);
        }
      });
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] fade-in-up">
      <section className="h-screen w-full overflow-hidden flex flex-col items-center justify-center gap-4 sm:gap-8 px-4 pb-24">
        <CanvasNestWrapper />
        {/* Logo */}
        {/* <p className="text-5xl md:text-9xl font-extrabold bg-clip-text text-center text-transparent bg-[linear-gradient(to_right,white,red)] bg-[length:200%_auto] animate-gradient"> */}
        <p className="text-5xl md:text-9xl font-extrabold bg-clip-text text-center text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
          {macros.title}
        </p>
        <p className="text-2xl md:text-3xl text-center">{macros.description}</p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-lg sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="#join"
            scroll={true}
          >
            <BsPeopleFill />
            Join Us
          </Link>
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-lg sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/about"
          >
            Learn More
          </Link>
        </div>
      </section>

      <main className="flex flex-col gap-64 row-start-2 items-center">
        {/* About */}
        <FadeInSection>
          <section className="flex flex-col gap-8 items-center" id="about">
            <div className="flex flex-col sm:flex-row gap-20 items-center sm:items-start max-w-6xl justify-between px-8">
              <div className="flex flex-col gap-4 items-center sm:items-start w-full max-w-lg">
                <h2 className="text-6xl font-bold">About Us</h2>
                <p className="text-center text-2xl sm:text-left">
                  {macros.about_text}
                </p>
                <Link
                  href="/about"
                  className="text-md sm:text-base text-blue-500 hover:text-blue-700 text-left"
                >
                  Learn More
                </Link>
              </div>
              <Image
                src="/group.jpeg"
                alt="About Us"
                width={800}
                height={800}
                className="rounded-lg w-full h-auto object-contain max-h-[500px] sm:object-cover sm:h-[400px] sm:w-[900px]"
              />
            </div>
          </section>
        </FadeInSection>

        {/* Join Us */}
        <FadeInSection>
          <section
            className="flex flex-col gap-12 items-center max-w-5xl px-8"
            id="join"
          >
            <div className="flex flex-col gap-4 items-center w-full">
              <h2 className="text-6xl font-bold text-center">Join Us</h2>
              <p className="text-center text-2xl pb-4">{macros.join_text}</p>
              {/* Disabled button */}
              <button
                className={`rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 text-lg sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-4/5 font-semibold ${
                  macros.join_disabled
                    ? "cursor-not-allowed bg-gray-500"
                    : "dark:hover:bg-[#ccc]"
                }`}
                disabled={macros.join_disabled}
                onClick={(e) => {
                  if (macros.join_disabled) {
                    e.preventDefault();
                    alert("Applications are currently closed.");
                  } else {
                    // open in a new tab
                    window.open(macros.join_link, "_blank");
                  }
                }}
              >
                Join Us
              </button>
              {macros.join_disabled && (
                <p className="text-md text-center text-gray-500">
                  Applications are currently closed. Check back on{" "}
                  {macros.application_opens} for updates.
                </p>
              )}
            </div>
          </section>
        </FadeInSection>

        {/* Contact Us */}
        <FadeInSection>
          <section
            className="flex flex-col gap-12 items-center max-w-5xl px-8"
            id="contact"
          >
            <div className="flex flex-col gap-24 items-center sm:flex-row w-full">
              <Image
                src="/contact.jpeg"
                alt="About Us"
                width={300}
                height={400}
                className="overflow-hidden w-[300px] h-[400px] rounded-lg
            object-cover"
              />
              <div className="flex flex-col gap-4 items-start w-full max-w-md justify-between h-[400px]">
                <div className="flex flex-col gap-4 items-center sm:items-start w-full">
                  <h2 className="text-5xl font-bold text-center sm:text-left">
                    Contact Us
                  </h2>
                  <p className="text-center sm:text-left text-2xl pb-4">
                    {macros.contact_text}
                  </p>
                </div>
                <div className="flex flex-col gap-4 items-center w-full">
                  <Link
                    href="/contact"
                    className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full font-semibold"
                  >
                    <IoSend />
                    Message Us
                  </Link>
                  {macros.socials.map((social, index) => (
                    <a
                      key={index}
                      className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 sm:min-w-44 gap-2 w-full"
                      href={social.href}
                    >
                      {social.icon}
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* Members */}
        <FadeInSection>
          <section
            className="flex flex-col gap-8 items-center mb-24"
            id="members"
          >
            <h2 className="text-6xl font-bold">Members</h2>
            <MemberList limit={3} />
            <a
              className="text-md sm:text-base text-blue-500 hover:text-blue-700 text-center sm:text-left w-full"
              href="/about"
            >
              View All Members
            </a>
          </section>
        </FadeInSection>
      </main>
    </div>
  );
}
