import ShopActCalculator from "@/components/calculators/ShopActCalculator";
import FAQSchema from "@/components/seo/FAQSchema";

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 space-y-12">
      {/* HEADER */}
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Shop & Establishment Act Eligibility Checker
          <span className="block text-base sm:text-lg font-medium text-slate-600 mt-1">
            Check whether Shop Act registration is mandatory in India
          </span>
        </h1>

        <div className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700 border border-emerald-200">
          Based on latest state labour law rules in India
        </div>
      </header>

      {/* INTRO PARAGRAPH (SEO INTENT CONFIRMATION) */}
      <p className="text-sm leading-relaxed text-slate-700 max-w-3xl">
        This Shop and Establishment Act eligibility checker helps Indian shop
        owners, startups, offices, and small businesses determine whether Shop
        Act registration is mandatory based on their state, business type, and
        number of employees, as per applicable state labour laws.
      </p>

      {/* TOOL */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-emerald-50 blur-2xl opacity-60" />
        <ShopActCalculator />
      </section>

      {/* EDGE-CASE / CLARIFICATION PARAGRAPH */}
      <p className="text-xs leading-relaxed text-slate-600 max-w-3xl">
        Shop & Establishment Act rules vary across Indian states. While most
        states require registration when one or more employees are engaged,
        certain states may still mandate registration for home-based businesses,
        offices, or commercial establishments even with zero employees.
      </p>

      {/* FAQ SECTION */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Frequently Asked Questions
        </h2>

        <dl className="space-y-4 text-sm">
          <div className="rounded-lg bg-slate-50 p-4">
            <dt className="font-semibold text-slate-900">
              Is Shop Act license mandatory for freelancers?
            </dt>
            <dd className="mt-1 text-slate-600 leading-relaxed">
              In most states, freelancers with zero employees are not required
              to obtain Shop Act registration. However, some states may still
              require registration depending on the nature of business or place
              of work.
            </dd>
          </div>

          <div className="rounded-lg bg-slate-50 p-4">
            <dt className="font-semibold text-slate-900">
              When is Shop & Establishment Act registration required?
            </dt>
            <dd className="mt-1 text-slate-600 leading-relaxed">
              Shop Act registration is generally mandatory when a business,
              shop, office, or commercial establishment employs one or more
              workers, including part-time or contractual employees.
            </dd>
          </div>

          <div className="rounded-lg bg-slate-50 p-4">
            <dt className="font-semibold text-slate-900">
              Is Shop Act registration state-specific?
            </dt>
            <dd className="mt-1 text-slate-600 leading-relaxed">
              Yes. Each Indian state has its own Shop & Establishment Act with
              different registration thresholds, renewal periods, and penalty
              provisions. Businesses must comply with the law applicable in
              their state of operation.
            </dd>
          </div>
        </dl>
      </section>

      {/* FOOTER META */}
      <footer className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-500">
        <span>Last updated: January 2026</span>
        <span>© {new Date().getFullYear()} Legal Meter India</span>
      </footer>

      {/* FAQ SCHEMA */}
      <FAQSchema
        faqs={[
          {
            q: "Is Shop Act license mandatory for freelancers?",
            a: "Usually not mandatory for freelancers with zero employees, but requirements may vary by state.",
          },
          {
            q: "When is Shop & Establishment Act registration required?",
            a: "Registration is generally required when one or more employees are engaged in a shop or commercial establishment.",
          },
          {
            q: "Is Shop Act registration state-specific?",
            a: "Yes. Shop Act rules and thresholds differ across Indian states.",
          },
        ]}
      />
    </main>
  );
}
