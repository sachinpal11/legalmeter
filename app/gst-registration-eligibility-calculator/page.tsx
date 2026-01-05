import GSTCalculator from "@/components/calculators/GSTCalculator";
import FAQSchema from "@/components/seo/FAQSchema";

export default function Page() {
  return (
    <div className="space-y-10">
      {/* HEADER */}
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          GST Registration Eligibility Calculator (India)
        </h1>
        <p className="text-sm text-emerald-700 font-medium">
          Based on latest Indian government rules
        </p>
      </header>

      {/* TOOL */}
      <GSTCalculator />

      {/* FAQ SECTION */}
      <section className="bg-white rounded-xl border p-6 space-y-4">
        <h2 className="text-lg font-semibold">Frequently Asked Questions</h2>

        <dl className="space-y-3 text-sm">
          <div>
            <dt className="font-medium">
              Do freelancers need GST registration?
            </dt>
            <dd className="text-gray-600 mt-1">
              Yes. Freelancers must register if turnover exceeds the threshold
              or if they provide interstate services.
            </dd>
          </div>
        </dl>
      </section>

      {/* FOOTER META */}
      <p className="text-xs text-gray-500">Last updated: January 2026</p>

      <FAQSchema
        faqs={[
          {
            q: "Do freelancers need GST registration?",
            a: "Freelancers must register if turnover exceeds threshold or interstate supply exists.",
          },
        ]}
      />
    </div>
  );
}
