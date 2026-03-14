import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center">
                <Image 
                  src="/LM-removebg-preview.png" 
                  alt="LegalMeter Logo" 
                  width={28} 
                  height={28} 
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-slate-900">LegalMeter</span>
              <span className="text-xs text-slate-500 font-medium">India</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Automated, rule-based legal logic for Indian startups. Built to help founders navigate compliance without friction.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Compliance Tools</h2>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link className="hover:text-primary transition-colors" href="/gst-registration-eligibility-calculator">GST Eligibility</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/professional-tax-calculator">Professional Tax Calc</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/shop-act-license-eligibility">Shop Act Checker</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Company</h2>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link className="hover:text-primary transition-colors" href="/about">About Us</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/articles">Legal Guides</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/terms">Terms of Use</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Trust Center</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="material-icons text-primary text-base">check_circle</span>
                Rule-based Logic
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="material-icons text-primary text-base">privacy_tip</span>
                Privacy Focused
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="material-icons text-primary text-base">update</span>
                FY 2024-25 Updates
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-slate-400">
          <p>© {new Date().getFullYear()} LegalMeter India. All rights reserved. Professional tools, not legal advice.</p>
          <div className="flex gap-6">
            <Link className="hover:text-primary transition-colors" href="#">Twitter</Link>
            <Link className="hover:text-primary transition-colors" href="#">LinkedIn</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
