import { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  // ... (keeping existing metadata)
  metadataBase: new URL("https://legalmeter.in"),
  title: {
    default: "LegalMeter India – Legal Guides, Document Help & Compliance Tools",
    template: "%s | LegalMeter India",
  },
  description: "LegalMeter India offers simple legal guides, government document help (Passport, PAN, Aadhaar), police & cybercrime procedures, and compliance calculators. Trusted step-by-step articles for Indian citizens. Updated for 2026.",
  // Add Material Icons
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <meta name="google-site-verification" content="5F7o2NbmepEDG_WuYuEztK-3EPcD-o0IepULhZiN2Vw" />
      </head>
      <body
        className="bg-white text-slate-900 font-sans antialiased"
        suppressHydrationWarning
      >
        <Analytics />
        <GoogleAnalytics gaId="G-6B7VNDKLTZ" />
        <Navbar />
        <main id="main-content" suppressHydrationWarning>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
