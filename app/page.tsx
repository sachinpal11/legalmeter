import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustSection from "@/components/home/TrustSection";
import ToolsSection from "@/components/home/ToolsSection";
import HowItWorks from "@/components/home/HowItWorks";
import LegalInsights from "@/components/home/LegalInsights";
import ComparisonSection from "@/components/home/ComparisonSection";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  metadataBase: new URL("https://legalmeter.in"),
  title: "LegalMeter India – Legal Guides, Document Help & Compliance Tools",
  description: "LegalMeter India offers simple legal guides, government document help (Passport, PAN, Aadhaar), police & cybercrime procedures, and compliance calculators. Trusted step-by-step articles for Indian citizens. Updated for 2026.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://legalmeter.in",
    siteName: "LegalMeter India",
    title: "LegalMeter India – Legal Guides, Document Help & Compliance Tools",
    description: "Explore legal guides, how-to-apply articles, police complaint help, cybercrime steps, and compliance calculators for Indian citizens.",
    images: ["/og/og-main.jpg"],
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustSection />
      <ToolsSection />
      <HowItWorks />
      <LegalInsights />
      <ComparisonSection />
      <FinalCTA />
    </div>
  );
}
