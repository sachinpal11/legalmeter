export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 space-y-10">
      {/* HEADER */}
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-600">Last updated: January 2026</p>
      </header>

      {/* INTRO */}
      <section className="space-y-4 text-sm text-slate-700 leading-relaxed">
        <p>
          Legal Meter India ("Legal Meter", "we", "our", or "us") respects your
          privacy and is committed to protecting it through this Privacy Policy.
          This policy explains how we collect, use, and safeguard information
          when you use our website.
        </p>
      </section>

      {/* INFORMATION WE COLLECT */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Information We Collect
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          Legal Meter does not require users to create accounts or submit
          personal information to use our calculators. We may collect limited,
          non-personal information automatically, such as browser type, device
          information, and anonymous usage data, to improve site performance and
          user experience.
        </p>
      </section>

      {/* USE OF INFORMATION */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          How We Use Information
        </h2>
        <ul className="list-disc pl-5 text-sm text-slate-700 space-y-2">
          <li>To operate and maintain the website</li>
          <li>To improve accuracy and usability of calculators</li>
          <li>To monitor site performance and security</li>
          <li>To understand general usage trends</li>
        </ul>
      </section>

      {/* COOKIES */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Cookies and Analytics
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          Legal Meter may use cookies and third-party analytics tools (such as
          Google Analytics) to collect anonymous usage statistics. These cookies
          do not identify individual users and are used solely for performance
          and analytical purposes.
        </p>
      </section>

      {/* THIRD PARTY */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Third-Party Services
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          We may display third-party links or advertisements. Legal Meter is not
          responsible for the privacy practices of external websites. Users are
          encouraged to review the privacy policies of any third-party services
          they access.
        </p>
      </section>

      {/* DATA SECURITY */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Data Security</h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          We take reasonable measures to protect information collected through
          our website. However, no method of transmission over the internet is
          completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      {/* CHANGES */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">
          Changes to This Policy
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          Legal Meter may update this Privacy Policy from time to time. Any
          changes will be posted on this page with an updated revision date.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t pt-4 text-xs text-slate-500">
        © {new Date().getFullYear()} Legal Meter India
      </footer>
    </main>
  );
}
