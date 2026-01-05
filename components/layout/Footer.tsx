import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 space-y-10">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* BRAND */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">
              Legal<span className="text-indigo-700">Meter</span>
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Legal Meter helps Indian freelancers, startups, and businesses
              understand tax and compliance requirements through simple,
              rule-based calculators.
            </p>
          </div>

          {/* TOOLS */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Tools
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link
                  href="/gst-registration-eligibility-calculator"
                  className="hover:text-indigo-700"
                >
                  GST Eligibility Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/professional-tax-calculator"
                  className="hover:text-indigo-700"
                >
                  Professional Tax Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/shop-act-license-eligibility"
                  className="hover:text-indigo-700"
                >
                  Shop Act License Checker
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/about" className="hover:text-indigo-700">
                  About Legal Meter
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-indigo-700">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-indigo-700">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* TRUST */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Trust & Compliance
            </h4>
            <p className="text-sm leading-relaxed text-slate-600">
              All calculators are based on publicly available Indian tax and
              compliance rules. Results are indicative and should not be treated
              as professional legal advice.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px w-full bg-slate-200" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-500">
          <span>
            © {new Date().getFullYear()} Legal Meter India. All rights reserved.
          </span>
          <span>Built for India 🇮🇳 | Fast • Accurate • Rule-Based</span>
        </div>
      </div>
    </footer>
  );
}
