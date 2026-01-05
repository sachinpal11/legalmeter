export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 space-y-10">
      {/* HEADER */}
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Terms of Use
        </h1>
        <p className="text-sm text-slate-600">Last updated: January 2026</p>
      </header>

      {/* INTRO */}
      <section className="space-y-4 text-sm text-slate-700 leading-relaxed">
        <p>
          By accessing or using Legal Meter India ("Legal Meter"), you agree to
          comply with and be bound by these Terms of Use. If you do not agree
          with these terms, please do not use the website.
        </p>
      </section>

      {/* PURPOSE */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Purpose of the Website
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          Legal Meter provides rule-based calculators to help users understand
          Indian tax and compliance requirements. The information provided is
          for general informational purposes only.
        </p>
      </section>

      {/* NO LEGAL ADVICE */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          No Legal or Professional Advice
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          Legal Meter does not provide legal, tax, or professional advice. The
          calculators and explanations are based on publicly available rules and
          may not account for all individual circumstances. Users should consult
          a qualified professional before making compliance decisions.
        </p>
      </section>

      {/* LIMITATION */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Limitation of Liability
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          Legal Meter shall not be held liable for any loss, damage, or
          consequence arising from the use or reliance on information provided
          through this website.
        </p>
      </section>

      {/* USER RESPONSIBILITY */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          User Responsibilities
        </h2>
        <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
          <li>Use the website lawfully and responsibly</li>
          <li>Do not misuse or attempt to disrupt the website</li>
          <li>Verify information independently before acting upon it</li>
        </ul>
      </section>

      {/* CHANGES */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Changes to Terms
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          Legal Meter may modify these Terms of Use at any time. Continued use
          of the website constitutes acceptance of updated terms.
        </p>
      </section>

      {/* GOVERNING LAW */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Governing Law</h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          These terms shall be governed by and interpreted in accordance with
          the laws of India.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t pt-4 text-xs text-slate-500">
        © {new Date().getFullYear()} Legal Meter India
      </footer>
    </main>
  );
}
