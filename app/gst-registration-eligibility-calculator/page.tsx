import GSTCalculator from "@/components/calculators/GSTCalculator";
import FAQSchema from "@/components/seo/FAQSchema";

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 space-y-12">
      {/* HEADER */}
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          GST Registration Eligibility Calculator
          <span className="block text-base sm:text-lg font-medium text-slate-600 mt-1">
            Check GST requirement in India instantly
          </span>
        </h1>

        <div className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700 border border-emerald-200">
          Based on latest Indian government GST rules
        </div>
      </header>

      {/* TOOL WRAPPER */}
      <section className="relative">
        {/* subtle background glow */}
        <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-emerald-50 blur-2xl opacity-60" />
        <GSTCalculator />
      </section>

      {/* FAQ SECTION */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-xl font-semibold text-slate-900">
          Frequently Asked Questions
        </h2>

        <dl className="space-y-4 text-sm">
          <div className="rounded-lg bg-slate-50 p-4">
            <dt className="font-semibold text-slate-900">
              Do freelancers need GST registration?
            </dt>
            <dd className="mt-1 text-slate-600 leading-relaxed">
              Yes. Freelancers are required to register for GST if their annual
              turnover exceeds the prescribed threshold limit or if they provide
              interstate services, regardless of turnover.
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
            q: "Do freelancers need GST registration?",
            a: "Freelancers must register for GST if turnover exceeds the threshold limit or if they provide interstate services.",
          },
        ]}
      />
    </main>
  );
}
