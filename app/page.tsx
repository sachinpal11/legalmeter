import type { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/TrustBar";

/* ===================== */
/* SEO META TAGS */
/* ===================== */

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
    images: [
      {
        url: "/og/og-main.jpg",
        width: 1200,
        height: 630,
        alt: "LegalMeter India – Legal Help & Guides",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LegalMeter India – Legal Guides, Document Help & Compliance Tools",
    description:
      "India-focused legal guides, document application help, FIR/complaint steps, and compliance calculators.",
  },

  category: "Legal & Government Services",
};

export default function HomePage() {
  return (
    <section className="space-y-14">
      {/* HERO */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          LegalMeter India
        </h1>

        <p className="max-w-2xl mx-auto text-slate-600 text-lg">
          Rule-based Indian compliance calculators built for founders,
          freelancers, and small businesses.
        </p>

        <div className="flex justify-center">
          <TrustBar />
        </div>
      </header>

      {/* SEO INTRO PARAGRAPHS */}

      {/* TOOLS GRID */}
      <section className="grid gap-6 sm:grid-cols-2">
        <ToolCard
          title="GST Registration Eligibility"
          description="Check if GST registration is mandatory based on turnover, state, and interstate supply."
          href="/gst-registration-eligibility-calculator"
        />

        <ToolCard
          title="Professional Tax Calculator"
          description="Calculate monthly and annual professional tax as per state-wise slabs."
          href="/professional-tax-calculator"
        />

        <ToolCard
          title="Shop & Establishment Act Checker"
          description="Know whether your business requires Shop Act registration."
          href="/shop-act-license-eligibility"
        />
      </section>
      <section className="max-w-3xl mx-auto space-y-4 text-sm leading-relaxed text-slate-700">
        <p>
          Legal Meter India is a compliance-focused platform offering simple,
          rule-based calculators to help Indian businesses understand key legal
          and tax requirements. Our tools are designed to provide quick clarity
          on mandatory registrations and statutory deductions under Indian law.
        </p>

        <p className="text-slate-600">
          The calculators on this website cover common compliance questions
          related to GST registration eligibility, professional tax deduction,
          and Shop & Establishment Act requirements. All tools are based on
          publicly available government rules and are intended for informational
          purposes only.
        </p>
      </section>
    </section>
  );
}

/* ===================== */
/* TOOL CARD COMPONENT */
/* ===================== */

function ToolCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
    >
      <h2 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600">
        {title}
      </h2>

      <p className="mt-2 text-sm text-slate-600">{description}</p>

      <span className="mt-4 inline-block text-sm font-medium text-indigo-600">
        Open calculator →
      </span>
    </Link>
  );
}
