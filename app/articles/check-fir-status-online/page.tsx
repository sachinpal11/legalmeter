import type { Metadata } from "next";
import FAQSection from "@/components/ui/Faq";
import FAQSchema from "@/components/seo/FAQSchema";
import ArticleSchema from "@/components/seo/ArticleSchema";
import ArticleLayout from "@/components/layout/ArticleLayout";
import Heading from "@/components/layout/Heading";

/* INLINE ICONS (ZERO JS) */
function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 text-indigo-500 shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M16.7 5.3a1 1 0 00-1.4-1.4L8 11.17 4.7 7.88a1 1 0 10-1.4 1.42l4 4a1 1 0 001.4 0l8-8z" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "How to Check FIR Status Online in India (2026 Guide)",
  description:
    "Learn how to check FIR status online in India using state police portals and the CCTNS Crime & Criminal Tracking system. Step-by-step guide with links.",
  keywords: [
    "check FIR status online",
    "FIR online status",
    "CCTNS check FIR",
    "police FIR tracking",
    "Indian FIR search",
  ],
  alternates: {
    canonical: "https://legalmeter.in/articles/check-fir-status-online",
  },
  openGraph: {
    title: "How to Check FIR Status Online in India (2026 Guide)",
    description:
      "Complete 2026 guide to check FIR status online through state police portals and CCTNS search.",
    url: "https://legalmeter.in/articles/check-fir-status-online",
    siteName: "LegalMeter India",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://legalmeter.in/og/check-fir-status.jpg",
        width: 1200,
        height: 630,
        alt: "How to Check FIR Status Online",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <ArticleSchema
        title="How to Check FIR Status Online in India (2026 Guide)"
        description="Learn how to check FIR status online using official police portals and CCTNS."
        date="2026-01-01"
        url="https://legalmeter.in/articles/check-fir-status-online"
      />

      <ArticleLayout
        title="How to Check FIR Status Online in India (2026 Guide)"
        updatedAt="January 2026"
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Articles", href: "/articles" },
          { name: "Check FIR Status Online" },
        ]}
        TableOfContent={[
          { id: "intro", label: "Introduction" },
          { id: "requirements", label: "What You Need to Check FIR Status" },
          { id: "steps", label: "How to Check FIR Status Online" },
          { id: "cctns", label: "Check FIR via CCTNS Portal" },
          { id: "state-portals", label: "Statewise FIR Status Portals" },
          { id: "faqs", label: "FAQs" },
        ]}
      >
        {/* INTRO */}
        <section id="intro">
          <Heading id="intro">Introduction</Heading>
          <p className="mt-3 text-slate-700 leading-relaxed">
            In India, most state police departments now allow citizens to check
            FIR (First Information Report) status online. You can track the
            progress of your complaint, view basic FIR details, and see the
            current investigation status.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            This guide covers how to check your FIR status using official state
            portals and the centralized CCTNS Crime & Criminal Tracking System.
          </p>
        </section>

        {/* REQUIREMENTS */}
        <section id="requirements">
          <Heading id="requirements">What You Need to Check FIR Status</Heading>

          <ul className="mt-4 text-slate-700 text-sm space-y-2">
            {[
              "FIR Number",
              "Police Station Name",
              "District/State",
              "Year of Registration",
              "Mobile number used during complaint (optional)",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 min-h-[24px]">
                <CheckIcon /> {item}
              </li>
            ))}
          </ul>
        </section>

        {/* STEPS */}
        <section id="steps">
          <Heading id="steps">How to Check FIR Status Online</Heading>

          <ol className="mt-4 space-y-4 text-slate-700">
            <li className="border rounded-lg p-4 bg-white">
              <strong>Step 1 — Visit your state police FIR portal</strong>
              <p className="mt-1">
                Each state provides an online FIR search service.
              </p>
            </li>
            <li className="border rounded-lg p-4 bg-white">
              <strong>Step 2 — Select “FIR Search” or “View FIR”</strong>
              <p className="mt-1">
                The option may appear under Citizen Services.
              </p>
            </li>
            <li className="border rounded-lg p-4 bg-white">
              <strong>Step 3 — Enter FIR Number + Year</strong>
              <p className="mt-1">
                Some states also require District and Police Station.
              </p>
            </li>
            <li className="border rounded-lg p-4 bg-white">
              <strong>Step 4 — Verify with OTP (if required)</strong>
              <p className="mt-1">A few states require mobile verification.</p>
            </li>
            <li className="border rounded-lg p-4 bg-white">
              <strong>Step 5 — View FIR Status</strong>
              <p className="mt-1">You will see sections like:</p>
              <ul className="list-disc ml-5 mt-2">
                <li>FIR Registration Details</li>
                <li>Investigation Officer Name</li>
                <li>Current Status (Open / Under Investigation / Closed)</li>
                <li>Charges applied</li>
              </ul>
            </li>
          </ol>
        </section>

        {/* CCTNS */}
        <section id="cctns">
          <Heading id="cctns">
            Check FIR via CCTNS Portal (National System)
          </Heading>

          <p className="mt-3 text-slate-700">
            The Ministry of Home Affairs provides a centralized FIR search tool:
          </p>

          <p className="mt-2">
            <a
              href="https://citizenportal.cctns.police.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline"
            >
              citizenportal.cctns.police.gov.in
            </a>
          </p>

          <ol className="mt-4 space-y-2 text-slate-700">
            <li>Select “FIR Status”.</li>
            <li>Choose your State.</li>
            <li>Enter FIR No. + Year.</li>
            <li>Enter Police Station details (if needed).</li>
            <li>View FIR details instantly.</li>
          </ol>
        </section>

        {/* STATE PORTALS */}
        <section id="state-portals">
          <Heading id="state-portals">Statewise FIR Status Portals</Heading>

          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
            {[
              ["Delhi Police", "https://delhipolice.gov.in"],
              ["Maharashtra Police", "https://mahapolice.gov.in"],
              ["Uttar Pradesh Police", "https://uppolice.gov.in"],
              ["Karnataka Police", "https://ksp.karnataka.gov.in"],
              ["Punjab Police", "https://punjabpolice.gov.in"],
              ["Kerala Police", "https://keralapolice.gov.in"],
              ["Tamil Nadu Police", "https://tnpolice.gov.in"],
              ["West Bengal Police", "https://wbpolice.gov.in"],
            ].map(([name, link], i) => (
              <li key={i}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border rounded-lg bg-white hover:bg-slate-50 transition"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-3 text-sm text-slate-500">
            Search other states:{" "}
            <strong>“&lt;state&gt; FIR status online”</strong>
          </p>
        </section>

        {/* FAQ */}
        <section id="faqs">
          <FAQSection
            faqs={[
              {
                question: "Is FIR available to view online in every state?",
                answer:
                  "Most Indian states allow online FIR search, but some restrict access for privacy reasons.",
              },
              {
                question: "Do I need an FIR number to check status?",
                answer:
                  "Yes, the FIR number and year are mandatory for most portals.",
              },
              {
                question: "Is FIR status updated in real-time?",
                answer:
                  "Updates depend on the state police portal. Many states sync data through CCTNS in near real-time.",
              },
            ]}
          />
        </section>

        <FAQSchema
          faqs={[
            {
              q: "How to check FIR status online?",
              a: "Visit your state police portal or the national CCTNS website.",
            },
            {
              q: "Do I need FIR number to check status?",
              a: "Yes, FIR number and year are required.",
            },
            {
              q: "Can I view FIR details without OTP?",
              a: "Some states allow it, but others require mobile verification.",
            },
          ]}
        />
      </ArticleLayout>
    </>
  );
}
