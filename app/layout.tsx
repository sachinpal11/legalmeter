import { ReactNode } from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

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
  metadataBase: new URL("https://legalmeter.in"), // ✅ change if domain differs
  title: {
    default: "Legal Meter India – Compliance Calculators",
    template: "%s | Legal Meter India",
  },
  description:
    "Legal Meter provides India-specific compliance calculators including GST registration eligibility, professional tax deduction, and Shop & Establishment Act tools.",
  applicationName: "Legal Meter India",
  authors: [{ name: "Legal Meter India" }],
  creator: "Legal Meter India",
  publisher: "Legal Meter India",

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
    siteName: "Legal Meter India",
    title: "Legal Meter India – Compliance Calculators",
    description:
      "Simple, rule-based legal and compliance calculators for India. GST, Professional Tax, and Shop Act eligibility tools.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Legal Meter India – Compliance Calculators",
    description:
      "India-focused legal and compliance calculators. GST, Professional Tax, and Shop Act tools.",
  },

  category: "Legal & Compliance",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-gray-50 text-gray-900 font-sans antialiased">
        {/* Site Header */}
        <Navbar />

        {/* Main Content */}
        <main id="main-content" className="mx-auto max-w-4xl px-4 py-6">
          {children}
        </main>

        {/* Site Footer */}
        <Footer />
      </body>
    </html>
  );
}
