import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import Heading from "@/components/layout/Heading";

/* CATEGORY CARD COMPONENT (reuse with no JS) */
function ArticleCard({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition block"
    >
      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-700 transition">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>

      <span className="mt-3 inline-block text-indigo-600 text-sm font-medium group-hover:underline">
        Read more →
      </span>
    </a>
  );
}

/* PAGE METADATA */
export const metadata: Metadata = {
  title: "Legal Articles & Guides (2026) | LegalMeter India",
  description:
    "Browse LegalMeter's 2026 collection of simple, step-by-step legal guides: police complaints, FIR, legal notices, Aadhaar updates, PAN, Passport applications, and more.",
  alternates: {
    canonical: "https://legalmeter.in/articles",
  },
};

/* MAIN PAGE */
export default function Page() {
  return (
    <ArticleLayout
      title="Legal Articles & Guides (2026)"
      updatedAt="January 2026"
      breadcrumb={[{ name: "Home", href: "/" }, { name: "Articles" }]}
      TableOfContent={[
        { id: "intro", label: "Introduction" },
        { id: "apply", label: "How to Apply (Documents)" },
        { id: "legal", label: "Legal Help Guides" },
        { id: "identity", label: "Identity Document Updates" },
      ]}
    >
      {/* --------------------------- INTRO --------------------------- */}
      <section id="intro">
        <Heading id="intro">Introduction</Heading>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Find simple, step-by-step legal and government service guides designed
          specifically for Indian citizens. Every article is written in easy
          language with clear instructions, official links, and documents
          required.
        </p>
      </section>

      <div className="my-10 border-t" />

      {/* --------------------------- HOW TO APPLY --------------------------- */}
      <section id="apply">
        <Heading id="apply">How to Apply (Government Documents)</Heading>

        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          <ArticleCard
            title="Apply Passport Online (2026)"
            desc="Step-by-step guide to applying for a new passport or renewing an old one through Passport Seva."
            href="/articles/how-to-apply/apply-passport-online"
          />

          <ArticleCard
            title="Apply PAN Card Online"
            desc="How to apply for PAN using Aadhaar eKYC through NSDL or UTI portals. Documents and fees included."
            href="/articles/how-to-apply/apply-pan-card-online"
          />

          <ArticleCard
            title="Aadhaar Card Update Online"
            desc="Change address, name, DoB, or mobile number. Full UIDAI step-by-step update guide."
            href="/articles/how-to-apply/aadhaar-card-update-online"
          />
        </div>
      </section>

      <div className="my-10 border-t" />

      {/* --------------------------- LEGAL HELP --------------------------- */}
      <section id="legal">
        <Heading id="legal">Legal Help Guides</Heading>

        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          <ArticleCard
            title="How to File a Police Complaint Online"
            desc="Learn how to submit a police complaint digitally through your state police portal."
            href="/articles/file-police-complaint-online"
          />

          <ArticleCard
            title="How to Check FIR Status Online"
            desc="Guide to checking your FIR status on official state police and CCTNS portals."
            href="/articles/check-fir-status-online"
          />

          <ArticleCard
            title="How to Write a Legal Notice"
            desc="Simple legal notice format, structure, tips, and when to send it to protect your rights."
            href="/articles/how-to-write-legal-notice"
          />
        </div>
      </section>

      <div className="my-10 border-t" />

      {/* --------------------------- IDENTITY DOCS --------------------------- */}
      <section id="identity">
        <Heading id="identity">Identity Document Updates</Heading>

        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          <ArticleCard
            title="Aadhaar Update Guide (UIDAI)"
            desc="Update Aadhaar demographic details like address, name, date of birth, etc."
            href="/articles/how-to-apply/aadhaar-card-update-online"
          />

          <ArticleCard
            title="PAN Card Correction Guide"
            desc="Correct name, date of birth, signature, or address in your PAN card online."
            href="/articles/how-to-apply/apply-pan-card-online"
          />

          <ArticleCard
            title="Passport Reissue Process"
            desc="When and how to reissue a passport due to expiry, lost passport, or printing errors."
            href="/articles/how-to-apply/apply-passport-online"
          />
        </div>
      </section>

      {/* (FAQ section optional — add if needed) */}
    </ArticleLayout>
  );
}
