import { ReactNode } from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

/**
 * GLOBAL SEO METADATA
 * Applies to all pages unless overridden at page level
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://legalmeter.in"),

  title: {
    default:
      "LegalMeter India – Legal Guides, Document Help & Compliance Tools",
    template: "%s | LegalMeter India",
  },

  description:
    "LegalMeter India offers simple legal guides, government document help (Passport, PAN, Aadhaar), police & cybercrime procedures, and compliance calculators. Trusted step-by-step articles for Indian citizens. Updated for 2026.",

  applicationName: "LegalMeter India",
  authors: [{ name: "LegalMeter India" }],
  creator: "LegalMeter India",
  publisher: "LegalMeter India",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://legalmeter.in",
    siteName: "LegalMeter India",
    title: "LegalMeter India – Legal Guides, Document Help & Compliance Tools",

    description:
      "Explore legal guides, how-to-apply articles, police complaint help, cybercrime steps, and compliance calculators for Indian citizens.",
  },

  twitter: {
    card: "summary_large_image",
    title: "LegalMeter India – Legal Guides, Document Help & Compliance Tools",
    description:
      "India-focused legal guides, document application help, FIR/complaint steps, and compliance calculators.",
  },

  category: "Legal & Government Services",

  verification: {
    google: "5F7o2NbmepEDG_WuYuEztK-3EPcD-o0IepULhZiN2Vw",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body
        className="bg-gray-50 text-gray-900 font-sans antialiased"
        suppressHydrationWarning
      >
        {/* Site Header */}
        <Analytics />
        <Navbar />

        {/* Main Content */}
        <main
          id="main-content"
          className="mx-auto max-w-4xl px-4 py-6"
          suppressHydrationWarning
        >
          {children}
        </main>

        {/* Site Footer */}
        <Footer />
      </body>
    </html>
  );
}
