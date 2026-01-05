"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-slate-900">
            Legal<span className="text-indigo-700">Meter</span>
          </span>
          <span className="hidden text-xs text-slate-500 sm:inline">India</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/gst-registration-eligibility-calculator"
            className="text-sm font-medium text-slate-700 hover:text-indigo-700"
          >
            GST Tools
          </Link>

          <Link
            href="/professional-tax-calculator"
            className="text-sm font-medium text-slate-700 hover:text-indigo-700"
          >
            Professional Tax Tool
          </Link>

          <Link
            href="/shop-act-license-eligibility"
            className="text-sm font-medium text-slate-700 hover:text-indigo-700"
          >
            Shop Act license Tool
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-slate-700 hover:text-indigo-700"
          >
            About
          </Link>

          {/* CTA */}
          <Link
            href="/gst-registration-eligibility-calculator"
            className="rounded-full bg-indigo-900 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-800 transition"
          >
            Check GST Eligibility
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                open
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              }
            />
          </svg>
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/gst-registration-eligibility-calculator"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700"
            >
              GST Tools
            </Link>

            <Link
              href="/professional-tax-calculator"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700"
            >
              Professional Tax Tools
            </Link>

            <Link
              href="/shop-act-license-eligibility"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700"
            >
              Shop Act license Tool
            </Link>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-slate-700"
            >
              About
            </Link>

            <Link
              href="/gst-registration-eligibility-calculator"
              onClick={() => setOpen(false)}
              className="rounded-full bg-indigo-900 px-4 py-2 text-center text-xs font-semibold text-white"
            >
              Check GST Eligibility
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
