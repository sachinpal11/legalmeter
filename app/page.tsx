import type { Metadata } from "next";
import Link from "next/link";
import TrustBar from "@/components/TrustBar";

/* ===================== */
/* SEO META TAGS */
/* ===================== */

export const metadata: Metadata = {
  title: "Legal Meter India – GST, Professional Tax & Compliance Calculators",
  description:
    "Legal Meter India provides free, rule-based compliance calculators for GST registration eligibility, professional tax, and Shop & Establishment Act requirements.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Legal Meter India – Compliance Calculators",
    description:
      "Rule-based Indian compliance calculators for GST, professional tax, and Shop Act eligibility. Built for founders, freelancers, and small businesses.",
    url: "https://legalmeter.me/",
    siteName: "Legal Meter India",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Meter India – Compliance Calculators",
    description:
      "Free Indian compliance calculators for GST registration, professional tax, and Shop Act eligibility.",
  },
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
