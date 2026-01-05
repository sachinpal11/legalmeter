import ProfessionalTaxCalculator from "@/components/calculators/ProfessionalTaxCalculator";
import FAQSchema from "@/components/seo/FAQSchema";

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 space-y-12">
      {/* HEADER */}
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Professional Tax Calculator (India)
          <span className="block text-base sm:text-lg font-medium text-slate-600 mt-1">
            Calculate state-wise professional tax deduction instantly
          </span>
        </h1>

        <div className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700 border border-emerald-200">
          Based on latest state government professional tax rules
        </div>
      </header>

      {/* INTRO PARAGRAPH (SEO INTENT CONFIRMATION) */}
      <p className="text-sm leading-relaxed text-slate-700 max-w-3xl">
        This professional tax calculator helps salaried employees, employers,
        and HR teams in India calculate professional tax deductions accurately
        based on monthly salary and applicable state-wise slabs, as notified
        under respective state professional tax laws.
      </p>

      {/* TOOL */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-emerald-50 blur-2xl opacity-60" />
        <ProfessionalTaxCalculator />
      </section>

      {/* EDGE-CASE / CLARIFICATION PARAGRAPH */}
      <p className="text-xs leading-relaxed text-slate-600 max-w-3xl">
        Professional tax rules, exemption limits, and monthly deduction slabs
        vary from state to state. In some states, professional tax may not be
        applicable below a certain income level or may be charged differently in
        specific months, such as February.
      </p>

      {/* FAQ SECTION */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Frequently Asked Questions
        </h2>

        <dl className="space-y-4 text-sm">
          <div className="rounded-lg bg-slate-50 p-4">
            <dt className="font-semibold text-slate-900">
              Who needs to pay professional tax in India?
            </dt>
            <dd className="mt-1 text-slate-600 leading-relaxed">
              Professional tax is payable by salaried employees and
              self-employed professionals such as doctors, lawyers, and
              consultants, as per the professional tax laws applicable in their
              respective states.
            </dd>
          </div>

          <div className="rounded-lg bg-slate-50 p-4">
            <dt className="font-semibold text-slate-900">
              Is professional tax the same in all states?
            </dt>
            <dd className="mt-1 text-slate-600 leading-relaxed">
              No. Professional tax slabs, exemption limits, and deduction
              frequency differ from state to state. Employers must deduct
              professional tax according to the rules of the employee’s work
              location.
            </dd>
          </div>

          <div className="rounded-lg bg-slate-50 p-4">
            <dt className="font-semibold text-slate-900">
              Is professional tax deducted every month?
            </dt>
            <dd className="mt-1 text-slate-600 leading-relaxed">
              In most states, professional tax is deducted monthly. However, in
              some states like Maharashtra, higher deductions may apply in
              specific months such as February.
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
            q: "Who needs to pay professional tax in India?",
            a: "Professional tax is payable by salaried employees and self-employed professionals as per state laws.",
          },
          {
            q: "Is professional tax the same in all states?",
            a: "No. Professional tax slabs and exemption limits vary across Indian states.",
          },
          {
            q: "Is professional tax deducted every month?",
            a: "Usually yes, but some states apply different deductions in specific months.",
          },
        ]}
      />
    </main>
  );
}
