import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <section className="max-w-md text-center space-y-6">
        {/* ICON / CODE */}
        <div className="text-6xl font-extrabold tracking-tight text-slate-300">
          404
        </div>

        {/* MESSAGE */}
        <h1 className="text-2xl font-bold text-slate-900">Page not found</h1>

        <p className="text-sm leading-relaxed text-slate-600">
          The page you are looking for doesn’t exist or may have been moved.
          Don’t worry — you can still access all Legal Meter tools from the
          homepage.
        </p>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="rounded-full bg-indigo-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-800 transition"
          >
            Go to Homepage
          </Link>

          <Link
            href="/gst-registration-eligibility-calculator"
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-indigo-400 hover:text-indigo-700 transition"
          >
            Check GST Eligibility
          </Link>
        </div>

        {/* BRAND TRUST */}
        <p className="pt-4 text-xs text-slate-500">
          © {new Date().getFullYear()} Legal Meter India
        </p>
      </section>
    </main>
  );
}
