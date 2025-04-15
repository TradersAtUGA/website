"use client";

import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import "@/styles/animations.css";
import emailjs from "emailjs-com";

const MyInput = ({ type, placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="rounded-md border border-solid border-gray-200 p-2 bg-background"
  />
);

export default function ContactUsForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    // EmailJS parameters
    const templateParams = {
      from_name: name,
      message: message,
      from_email: email,
      to_email: "bmd59761@uga.edu",
    };

    try {
      await emailjs.send(
        "service_n98a0in",
        "template_ep4dl9i",
        templateParams,
        "pjLSad42KFTWequYL"
      );
    } catch (error) {
      setError("Failed to send your message. Please try again later.");

      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 rounded-md bg-background"
    >
      <MyInput
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <MyInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="rounded-md border border-solid border-gray-200 p-2 bg-background"
      />
      <button
        type="submit"
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
      >
        {loading ? "Loading..." : "Submit"}
        <BsArrowRight />
      </button>
      {error && <p className="text-red-500">Error sending email</p>}
    </form>
  );
}
