type FAQ = {
  question: string;
  answer: string;
};

interface FAQSectionProps {
  title?: string;
  faqs: FAQ[];
}

export default function FAQSection({
  title = "Frequently Asked Questions",
  faqs,
}: FAQSectionProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>

      <dl className="space-y-4 text-sm">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-lg bg-slate-50 p-4">
            <dt className="font-semibold text-slate-900">{faq.question}</dt>
            <dd className="mt-1 text-slate-600 leading-relaxed">
              {faq.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
