import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[2rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">Standardize Your Compliance Today</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 font-medium">
              Eliminate guesswork. Use our rule-based infrastructure to clarify your legal standing in minutes.
            </p>
            <Link 
              href="/gst-registration-eligibility-calculator"
              className="inline-block bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xl shadow-xl hover:scale-105 transition-transform"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
