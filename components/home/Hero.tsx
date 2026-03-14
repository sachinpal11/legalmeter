import Link from "next/link";

export default function Hero() {
  return (
    <header className="relative pt-10 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            <span className="material-icons text-sm">verified_user</span>
            Latest FY 2024-25 Rules Applied
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1]">
            Understand Indian Legal <span className="text-primary">Compliance</span> in Minutes
          </h1>
          <p className="text-lg text-slate-600 max-w-lg">
            Rule-based calculators for founders and freelancers. Navigate GST, Professional Tax, and Shop Act without expensive legal consultations.
          </p>
          <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-600">
            <div className="flex items-center gap-2">
              <span className="material-icons text-green-500 text-base">check_circle</span>
              Government Rules
            </div>
            <div className="flex items-center gap-2">
              <span className="material-icons text-green-500 text-base">check_circle</span>
              No Login Required
            </div>
            <div className="flex items-center gap-2">
              <span className="material-icons text-green-500 text-base">check_circle</span>
              No Data Stored
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/gst-registration-eligibility-calculator"
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/25 hover:-translate-y-1 transition-transform text-center"
            >
              Try Compliance Tools
            </Link>
            <Link
              href="/articles"
              className="bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors text-center"
            >
              Read Legal Guides
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
          <div className="relative grid gap-4">
            {/* UI Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-xl border border-slate-100 w-full max-w-sm ml-auto transform -rotate-2 hover:rotate-0 transition-transform">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">GST Assessment</span>
                <span className="bg-orange-100 text-orange-600 px-2 py-0.5 rounded text-[10px] font-bold">ACTION REQUIRED</span>
              </div>
              <div className="font-bold text-slate-900 mb-1">Registration Status</div>
              <p className="text-sm text-slate-600 mb-4">Based on interstate sales exceeding ₹0.</p>
              <div className="bg-primary/5 border border-primary/20 p-3 rounded-lg text-primary text-sm font-medium">
                Mandatory GST Registration Required
              </div>
            </div>
            {/* UI Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-xl border border-slate-100 w-full max-w-sm mr-auto transform rotate-2 hover:rotate-0 transition-transform">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Professional Tax</span>
                <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded text-[10px] font-bold">MONTHLY</span>
              </div>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-3xl font-bold text-slate-900">₹200</span>
                <span className="text-sm text-slate-600 mb-1">per employee / month</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full w-full">
                <div className="h-2 bg-primary rounded-full w-3/4"></div>
              </div>
            </div>
            {/* UI Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-xl border border-slate-100 w-full max-w-sm mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                  <span className="material-icons text-slate-500">store</span>
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Shop Act Requirement</div>
                  <p className="text-xs text-slate-600">Maharashtra Jurisdiction</p>
                </div>
              </div>
              <div className="text-xs text-slate-600">Intimation (Form F) required for 0-9 employees.</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
