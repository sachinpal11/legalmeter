export default function ComparisonSection() {
  const parameters = [
    { name: "Onboarding", legalMeter: "Anonymous / Zero UI Friction", consultancy: "Contact Form / CRM Entry" },
    { name: "Turnaround", legalMeter: "Real-time", consultancy: "24—72 Business Hours" },
    { name: "Data Privacy", legalMeter: "No Persistence", consultancy: "Manual Intake / Stored" },
    { name: "Fee Structure", legalMeter: "Free Self-Serve", consultancy: "Per-Session Pricing" }
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Transparent Compliance</h2>
          <p className="text-slate-500 mt-4">Automating what used to take days of consultation.</p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200/60 shadow-premium bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="p-6 text-xs font-bold uppercase tracking-widest text-slate-400">Parameter</th>
                <th className="p-6 text-xs font-bold uppercase tracking-widest text-primary">LegalMeter</th>
                <th className="p-6 text-xs font-bold uppercase tracking-widest text-slate-400">Consultancy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {parameters.map((param, idx) => (
                <tr key={idx}>
                  <td className="p-6 text-sm font-medium text-slate-600">{param.name}</td>
                  <td className="p-6 text-sm text-primary font-bold">{param.legalMeter}</td>
                  <td className="p-6 text-sm text-slate-500">{param.consultancy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
