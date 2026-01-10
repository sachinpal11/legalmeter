import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import Heading from "@/components/layout/Heading";
import FAQSection from "@/components/ui/Faq";
import FAQSchema from "@/components/seo/FAQSchema";
import ArticleSchema from "@/components/seo/ArticleSchema";

/* INLINE ICONS */
function LinkIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M14 3h7v7m0-7L10 14m-7 7h7v-7m-7 7L14 10" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "How to Apply for Government Documents in India (2026 Guide)",
  description:
    "Complete 2026 guide for applying online for Passport, PAN Card, and Aadhaar updates in India. Step-by-step process, documents required, fees, and official portals.",
  keywords: [
    "how to apply passport",
    "apply pan card online",
    "aadhaar update online",
    "government documents India",
    "apply government documents online",
  ],
  alternates: {
    canonical: "https://legalmeter.in/articles/how-to-apply",
  },
  openGraph: {
    title: "How to Apply for Government Documents in India (2026 Guide)",
    description:
      "Step-by-step 2026 guide for applying online for Passport, PAN Card, and Aadhaar updates in India.",
    url: "https://legalmeter.in/articles/how-to-apply",
    siteName: "LegalMeter India",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://legalmeter.in/og/how-to-apply.jpg",
        width: 1200,
        height: 630,
        alt: "How to Apply for Government Documents Online in India",
      },
    ],
  },
};

/* -----------------------------------------------------------
    MAIN PAGE
----------------------------------------------------------- */
export default function Page() {
  return (
    <>
      {/* Article Schema */}
      <ArticleSchema
        title="How to Apply for Government Documents in India (2026 Guide)"
        description="A complete guide to applying for essential government documents like Passport, PAN, and Aadhaar online."
        date="2026-01-01"
        url="https://legalmeter.in/articles/how-to-apply"
      />

      {/* Layout Wrapper */}
      <ArticleLayout
        title="How to Apply for Government Documents in India (2026 Guide)"
        updatedAt="January 2026"
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Articles", href: "/articles" },
          { name: "How to Apply" },
        ]}
        TableOfContent={[
          { id: "intro", label: "Introduction" },
          { id: "passport", label: "Applying for Passport" },
          { id: "pan", label: "Applying for PAN Card" },
          { id: "aadhaar", label: "Updating Aadhaar Card" },
          { id: "faqs", label: "FAQs" },
        ]}
      >
        {/* -----------------------------------------------------------
            INTRODUCTION
        ----------------------------------------------------------- */}
        <section id="intro" className="space-y-4">
          <Heading id="intro">Introduction</Heading>

          <div className="p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-200">
            <p className="text-slate-700 leading-relaxed">
              Applying for important government documents in India—like
              Passport, PAN Card, and Aadhaar—has become far more convenient
              thanks to online portals. Most applications can now be completed
              digitally without visiting an office.
            </p>

            <p className="mt-3 text-slate-700 leading-relaxed">
              This 2026 guide covers steps, documents required, fees, and
              official portal links for the three most essential identity
              documents.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="my-10 border-t border-slate-200" />

        {/* -----------------------------------------------------------
            PASSPORT
        ----------------------------------------------------------- */}
        <section id="passport" className="space-y-4">
          <Heading id="passport">How to Apply for Passport Online</Heading>

          <p className="text-slate-700 leading-relaxed">
            The Passport Seva portal supports online applications for new
            passports, renewals, reissues, and updates. The platform also
            handles appointment scheduling and police verification.
          </p>

          <a
            href="/articles/how-to-apply/apply-passport-online"
            className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700"
          >
            Read Full Passport Application Guide
            <LinkIcon />
          </a>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* -----------------------------------------------------------
            PAN CARD
        ----------------------------------------------------------- */}
        <section id="pan" className="space-y-4">
          <Heading id="pan">How to Apply for PAN Card Online</Heading>

          <p className="text-slate-700 leading-relaxed">
            PAN Card applications can be completed through NSDL or UTIITSL via
            Aadhaar-based eKYC. You can apply for new PAN, corrections, or
            reprints—all online.
          </p>

          <a
            href="/articles/how-to-apply/apply-pan-card-online"
            className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700"
          >
            Read Full PAN Card Application Guide
            <LinkIcon />
          </a>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* -----------------------------------------------------------
            AADHAAR
        ----------------------------------------------------------- */}
        <section id="aadhaar" className="space-y-4">
          <Heading id="aadhaar">How to Update Aadhaar Card Online</Heading>

          <p className="text-slate-700 leading-relaxed">
            UIDAI enables online Aadhaar updates for name, date of birth,
            address, language, and other demographic details. However, biometric
            updates require visiting an Aadhaar Seva Kendra.
          </p>

          <a
            href="/articles/how-to-apply/aadhaar-card-update-online"
            className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700"
          >
            Read Full Aadhaar Update Guide
            <LinkIcon />
          </a>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* -----------------------------------------------------------
            FAQ SECTION
        ----------------------------------------------------------- */}
        <section id="faqs" className="scroll-mt-20">
          <FAQSection
            title="Frequently Asked Questions"
            faqs={[
              {
                question: "Can I apply for these documents fully online?",
                answer:
                  "Most steps are online. Passport still requires an appointment for biometric verification.",
              },
              {
                question: "Is Aadhaar update fully online?",
                answer:
                  "Address updates can be done online. Mobile number and biometrics need physical verification.",
              },
              {
                question: "Is PAN Card application free?",
                answer:
                  "No. NSDL/UTIITSL charge government-approved processing fees.",
              },
            ]}
          />
        </section>

        {/* FAQ Schema */}
        <FAQSchema
          faqs={[
            {
              q: "How to apply for government documents online?",
              a: "Use official portals for Passport, PAN, and Aadhaar to complete applications digitally.",
            },
            {
              q: "Can I update Aadhaar online?",
              a: "Certain demographic fields like address, name, and DoB can be updated online.",
            },
            {
              q: "Is PAN card application online?",
              a: "Yes, using NSDL or UTIITSL Aadhaar-based eKYC.",
            },
          ]}
        />
      </ArticleLayout>
    </>
  );
}
