import Link from "next/link";

export default function ToolsSection() {
  const tools = [
    {
      title: "GST Registration Eligibility",
      description: "Evaluate your registration mandate based on aggregate turnover, interstate supply, and e-commerce channel rules.",
      href: "/gst-registration-eligibility-calculator",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
      cta: "Start Assessment"
    },
    {
      title: "Professional Tax Calculator",
      description: "Automated P-Tax slabs for all major states. Instantly calculate liability for employees and directors per jurisdiction.",
      href: "/professional-tax-calculator",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
      cta: "Calculate Now"
    },
    {
      title: "Shop Act Requirements",
      description: "Determine Gumasta or Shop & Establishment filing needs based on headcount and commercial establishment status.",
      href: "/shop-act-license-eligibility",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5-1.5h-1.5m-1.5 0v-1.5m0 1.5l1.5-1.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
      cta: "Verify Requirements"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Compliance Tools</h2>
            <p className="text-slate-500 mt-2">Self-serve assessment engines for modern enterprises.</p>
          </div>
          <Link href="/tools" className="text-primary text-sm font-semibold flex items-center gap-1 group">
            Explore full directory 
            <span className="material-icons text-xs group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {tools.map((tool, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-2xl border border-slate-200/60 shadow-premium hover:shadow-premium-hover hover:border-primary/20 transition-all flex flex-col h-full">
              <div className="w-12 h-12 text-slate-500 group-hover:text-primary transition-colors mb-6">
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{tool.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">{tool.description}</p>
              <Link 
                href={tool.href}
                className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-semibold hover:bg-primary transition-colors text-sm text-center"
              >
                {tool.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
