import Link from "next/link";
import TrustBar from "@/components/TrustBar";

export default function HomePage() {
  return (
    <section className="space-y-12">
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
