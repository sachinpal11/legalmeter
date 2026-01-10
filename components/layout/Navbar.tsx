"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [articlesOpen, setArticlesOpen] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);

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
          {/* ARTICLES DROPDOWN */}
          {/* ARTICLES DROPDOWN */}
          {/* ARTICLES DROPDOWN */}
          <div className="relative">
            <div className="group inline-block">
              {/* TRIGGER BUTTON */}
              <button className="text-sm font-medium text-slate-700 hover:text-indigo-700">
                Articles
              </button>

              {/* MAIN DROPDOWN */}
              <div
                className="
        absolute left-0 top-full 
        mt-2 w-60 rounded-xl border bg-white shadow-xl p-4
        opacity-0 invisible
        group-hover:opacity-100 group-hover:visible
        transition-all duration-150 ease-out
        z-30
      "
              >
                {/* SAFE HOVER AREA — prevents closing when moving mouse */}
                <div className="pt-2 pb-2">
                  {/* HOW TO APPLY SUBMENU */}
                  <div className="relative group/sub">
                    <div className="flex justify-between items-center text-sm font-medium text-slate-700 hover:text-indigo-700 cursor-pointer">
                      How to Apply
                      <span className="ml-2">▶</span>
                    </div>

                    {/* SUBMENU */}
                    <div
                      className="
              absolute left-full top-0 ml-2
              w-64 rounded-xl border bg-white shadow-xl p-4
              opacity-0 invisible
              group-hover/sub:opacity-100 group-hover/sub:visible
              transition-all duration-150 ease-out
              z-40
            "
                    >
                      <div className="flex flex-col gap-3">
                        <Link
                          href="/articles/how-to-apply/apply-passport-online"
                          className="hover:text-indigo-700 text-sm"
                        >
                          Apply Passport Online
                        </Link>

                        <Link
                          href="/articles/how-to-apply/apply-pan-card-online"
                          className="hover:text-indigo-700 text-sm"
                        >
                          Apply PAN Card Online
                        </Link>

                        <Link
                          href="/articles/how-to-apply/aadhaar-card-update-online"
                          className="hover:text-indigo-700 text-sm"
                        >
                          Aadhaar Card Update Online
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* OTHER LINKS */}
                  <div className="mt-4 flex flex-col gap-3">
                    <Link
                      href="/articles/file-police-complaint-online"
                      className="text-sm text-slate-700 hover:text-indigo-700"
                    >
                      File Police Complaint Online
                    </Link>

                    <Link
                      href="/articles/check-fir-status-online"
                      className="text-sm text-slate-700 hover:text-indigo-700"
                    >
                      Check FIR Status Online
                    </Link>

                    <Link
                      href="/articles/how-to-write-legal-notice"
                      className="text-sm text-slate-700 hover:text-indigo-700"
                    >
                      How to Write a Legal Notice
                    </Link>
                    <Link
                      href="/articles/how-to-file-cybercrime-complaint"
                      className="text-sm text-slate-700 hover:text-indigo-700"
                    >
                      How to File Cyber Crime Complaint
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* EXISTING LINKS */}
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
            {/* Articles Mobile */}
            <button
              onClick={() => setArticlesOpen(!articlesOpen)}
              className="text-sm font-medium text-slate-700 flex justify-between"
            >
              Articles
              <span>{articlesOpen ? "▲" : "▼"}</span>
            </button>

            {articlesOpen && (
              <div className="ml-3 flex flex-col gap-3">
                {/* How to Apply (mobile) */}
                <button
                  onClick={() => setApplyOpen(!applyOpen)}
                  className="text-sm font-medium text-slate-700 flex justify-between"
                >
                  How to Apply
                  <span>{applyOpen ? "▲" : "▼"}</span>
                </button>

                {applyOpen && (
                  <div className="ml-3 flex flex-col gap-3">
                    <Link
                      href="/articles/how-to-apply/apply-passport-online"
                      onClick={() => setOpen(false)}
                      className="text-sm text-slate-700"
                    >
                      Apply Passport Online
                    </Link>

                    <Link
                      href="/articles/how-to-apply/apply-pan-card-online"
                      onClick={() => setOpen(false)}
                      className="text-sm text-slate-700"
                    >
                      Apply PAN Card Online
                    </Link>

                    <Link
                      href="/articles/how-to-apply/aadhaar-card-update-online"
                      onClick={() => setOpen(false)}
                      className="text-sm text-slate-700"
                    >
                      Aadhaar Card Update Online
                    </Link>
                  </div>
                )}

                {/* Other article links */}
                <Link
                  href="/articles/file-police-complaint-online"
                  onClick={() => setOpen(false)}
                  className="text-sm text-slate-700"
                >
                  File Police Complaint Online
                </Link>

                <Link
                  href="/articles/check-fir-status-online"
                  onClick={() => setOpen(false)}
                  className="text-sm text-slate-700"
                >
                  Check FIR Status Online
                </Link>

                <Link
                  href="/articles/how-to-write-legal-notice"
                  onClick={() => setOpen(false)}
                  className="text-sm text-slate-700"
                >
                  How to Write a Legal Notice
                </Link>
                <Link
                  href="/articles/how-to-file-cybercrime-complaint"
                  onClick={() => setOpen(false)}
                  className="text-sm text-slate-700"
                >
                  How to File Cyber Crime Complaint
                </Link>
              </div>
            )}

            {/* Other mobile links */}
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
