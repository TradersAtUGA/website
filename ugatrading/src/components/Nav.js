"use client";

import { useState } from "react";
import Link from "next/link";
import Drawer from "@/components/Drawer";
import { macros } from "@/macros";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-backround font-[family-name:var(--font-geist-sans)]">
      <Link href="/" className="flex items-center gap-2">
        {macros.logo}
        <p className="text-lg text-gray-200 cursor-pointer font-bold">
          {macros.title}
        </p>
      </Link>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-gray-200 focus:outline-none hover:text-white"
      >
        {/* Hamburger icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <Drawer open={open} setOpen={setOpen} />
    </nav>
  );
}
