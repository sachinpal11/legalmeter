"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-3" 
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="group-hover:scale-110 transition-transform flex items-center justify-center">
              <Image 
                src="/LM-removebg-preview.png" 
                alt="LegalMeter Logo" 
                width={32} 
                height={32} 
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Legal<span className="text-primary">Meter</span>
              <span className="ml-1 text-xs font-medium text-slate-500 hidden sm:inline">India</span>
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="/gst-registration-eligibility-calculator" className="hover:text-primary transition-colors">GST Tools</Link>
            <Link href="/professional-tax-calculator" className="hover:text-primary transition-colors">Professional Tax</Link>
            <Link href="/shop-act-license-eligibility" className="hover:text-primary transition-colors">Shop Act</Link>
            <Link href="/articles" className="hover:text-primary transition-colors">Articles</Link>
          </div>

          <div className="hidden md:block">
            <Link 
              href="/gst-registration-eligibility-calculator"
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm"
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
            <span className="material-icons">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-b border-slate-200 absolute w-full left-0 p-4 space-y-4 shadow-xl">
          <Link href="/gst-registration-eligibility-calculator" onClick={() => setOpen(false)} className="block text-sm font-medium text-slate-700">GST Tools</Link>
          <Link href="/professional-tax-calculator" onClick={() => setOpen(false)} className="block text-sm font-medium text-slate-700">Professional Tax</Link>
          <Link href="/shop-act-license-eligibility" onClick={() => setOpen(false)} className="block text-sm font-medium text-slate-700">Shop Act</Link>
          <Link href="/articles" onClick={() => setOpen(false)} className="block text-sm font-medium text-slate-700">Articles</Link>
          <Link 
            href="/gst-registration-eligibility-calculator"
            onClick={() => setOpen(false)}
            className="block w-full bg-primary text-white px-4 py-3 rounded-lg text-center font-semibold"
          >
            Check GST Eligibility
          </Link>
        </div>
      )}
    </nav>
  );
}
