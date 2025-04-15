"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { macros } from "@/macros";

const NavLink = ({ href, text }) => (
  <Link href={href}>
    <p className="text-lg text-gray-400 hover:text-white cursor-pointer text-3xl hover:font-bold">
      {text}
    </p>
  </Link>
);

export default function Drawer({ open, setOpen }) {
  const close = () => setOpen(false);
  return (
    <Dialog open={open} onClose={close} className="relative z-10">
      {/* panel */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative sm:w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700 w-[10rem]"
            >
              <TransitionChild>
                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="relative rounded-md text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>
              </TransitionChild>

              <div className="flex h-full flex-col overflow-y-scroll bg-background p-6 shadow-xl border-l border-solid border-gray-200 gap-2">
                <NavLink href="/" text="Home" />
                <NavLink href="/about" text="About" />
                <NavLink href="/contact" text="Contact Us" />
                <NavLink href="/#join" text="Join Us" />
                <NavLink href="/projects" text="Projects" />
                <NavLink href="/alumni" text="Alumni" />
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
