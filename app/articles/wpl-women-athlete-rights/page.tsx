import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import Heading from "@/components/layout/Heading";
import FAQSection from "@/components/ui/Faq";
import FAQSchema from "@/components/seo/FAQSchema";
import ArticleSchema from "@/components/seo/ArticleSchema";

/* Inline SVG Icon */
function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M17 8l4 4-4 4M3 12h18" />
    </svg>
  );
}

export const metadata: Metadata = {
  title:
    "WPL 2026: Legal Rights of Women Athletes in India (Salary, Contract Rules, Harassment Laws)",
  description:
    "WPL 2026 special legal guide explaining rights of women athletes in India. Covers salaries, BCCI contracts, harassment laws, cybercrime reporting, discrimination, termination rules, and complaint filing.",
  keywords: [
    "WPL 2026",
    "women athletes rights India",
    "sports law India",
    "BCCI contract rules",
    "women cricket rights",
    "athlete harassment complaint",
    "sports salary rules India",
    "WPL players salary",
    "women sports laws India",
  ],
  alternates: {
    canonical: "https://legalmeter.in/articles/wpl-women-athlete-rights",
  },
  openGraph: {
    title:
      "WPL 2026: Legal Rights of Women Athletes in India (Contract, Salary, Harassment Laws)",
    description:
      "Complete 2026 legal guide explaining rights of WPL women athletes: salary rules, sports contracts, harassment laws, cybercrime complaints, and equal pay laws.",
    url: "https://legalmeter.in/articles/wpl-women-athlete-rights",
    siteName: "LegalMeter India",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://legalmeter.in/og/wpl-women-athlete-rights.jpg",
        width: 1200,
        height: 630,
        alt: "WPL 2026 Women Athletes Legal Rights",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
export default function Page() {
  return (
    <>
      <ArticleSchema
        title="WPL 2026: Legal Rights of Women Athletes in India"
        description="Full 2026 legal guide explaining rights and protections for women athletes in the Women's Premier League and Indian sports."
        date="2026-01-10"
        url="https://legalmeter.in/articles/wpl-women-athlete-rights"
      />

      <ArticleLayout
        title="WPL 2026: Legal Rights of Women Athletes in India"
        updatedAt="January 2026"
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Articles", href: "/articles" },
          { name: "WPL 2026: Women Athlete Rights" },
        ]}
        TableOfContent={[
          { id: "intro", label: "Introduction" },
          { id: "salary", label: "Salary & Pay Rules" },
          { id: "contract", label: "Contract Rights of WPL Players" },
          { id: "harassment", label: "Harassment & Safety Laws" },
          { id: "cybercrime", label: "How to File Cybercrime Complaint" },
          { id: "discrimination", label: "Gender Discrimination Laws" },
          { id: "termination", label: "Contract Termination Rules" },
          { id: "report", label: "How to Report Misconduct" },
          { id: "faqs", label: "FAQs" },
        ]}
      >
        {/* ----------------------------------------------------------- */}
        <section id="intro">
          <Heading id="intro">Introduction</Heading>

          <p className="mt-3 text-slate-700 leading-relaxed">
            WPL 2026 has created historic opportunities for women athletes in
            India. With rising salaries, major brand deals, TV broadcasting
            revenue, and global attention, protecting their legal rights is more
            important than ever.
          </p>

          <p className="mt-3 text-slate-700 leading-relaxed">
            This guide explains every legal protection available for women
            cricketers and athletes in India—covering salary rules, harassment
            laws, contract rights, cybercrime, discrimination, and complaint
            processes.
          </p>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* ----------------------------------------------------------- */}
        <section id="salary">
          <Heading id="salary">WPL Salary & Payment Rules (2026)</Heading>

          <p className="mt-3 text-slate-700 leading-relaxed">
            WPL players are protected under BCCI’s central contract and
            franchise agreements. Legally, players are entitled to:
          </p>

          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>Guaranteed full salary before the season ends</li>
            <li>No salary deductions without written consent</li>
            <li>Insurance for injuries during training & matches</li>
            <li>Mandatory payment within stipulated deadlines</li>
            <li>Right to audit their payment slips</li>
          </ul>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* ----------------------------------------------------------- */}
        <section id="contract">
          <Heading id="contract">Contract Rights of WPL Athletes</Heading>

          <p className="mt-3 text-slate-700">
            Every WPL player contract must include:
          </p>

          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>Clear fee structure and bonuses</li>
            <li>Brand endorsement guidelines</li>
            <li>Insurance coverage</li>
            <li>Travel & accommodation rights</li>
            <li>Termination rules</li>
            <li>No unfair or exploitative conditions</li>
          </ul>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* ----------------------------------------------------------- */}
        <section id="harassment">
          <Heading id="harassment">
            Harassment & Safety Laws for Women Athletes
          </Heading>

          <p className="mt-3 text-slate-700">
            Women athletes are protected under:
          </p>

          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>
              <strong>POSH Act (2013)</strong> – Protection against workplace
              sexual harassment
            </li>
            <li>
              <strong>IPC Section 354, 354D</strong> – Stalking, harassment,
              inappropriate behaviour
            </li>
            <li>
              <strong>BCCI Internal Complaints Committee</strong> for sports
            </li>
            <li>State Women’s Commission (for escalated cases)</li>
          </ul>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* ----------------------------------------------------------- */}
        <section id="cybercrime">
          <Heading id="cybercrime">How to File Cybercrime Complaint</Heading>

          <p className="mt-3 text-slate-700">Steps to report online abuse:</p>

          <ol className="mt-4 list-decimal pl-6 text-slate-700 space-y-2">
            <li>
              Visit{" "}
              <a
                href="https://cybercrime.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline"
              >
                cybercrime.gov.in
              </a>
            </li>
            <li>Select “Report Women/Child related crime”</li>
            <li>Upload screenshots</li>
            <li>Provide details</li>
            <li>Submit & save acknowledgment</li>
          </ol>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* ----------------------------------------------------------- */}
        <section id="discrimination">
          <Heading id="discrimination">
            Gender Discrimination Laws in Sports
          </Heading>

          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>Equal opportunity under Article 15 & 16</li>
            <li>Right to equal pay for equal work</li>
            <li>No discrimination in selection or promotion</li>
            <li>Right to safe and fair working environment</li>
          </ul>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* ----------------------------------------------------------- */}
        <section id="termination">
          <Heading id="termination">Contract Termination Rules</Heading>

          <p className="mt-3 text-slate-700">
            A franchise cannot terminate a WPL player without:
          </p>

          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>Written notice</li>
            <li>Valid documented reason</li>
            <li>Opportunity to respond</li>
            <li>Full payment settlement</li>
          </ul>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* ----------------------------------------------------------- */}
        <section id="report">
          <Heading id="report">How to Report Misconduct</Heading>

          <p className="mt-3 text-slate-700">
            Women athletes can file a complaint with:
          </p>

          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>BCCI Internal Complaints Committee</li>
            <li>State Women’s Commission</li>
            <li>Local Police Station</li>
            <li>National Cybercrime Portal</li>
          </ul>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* ----------------------------------------------------------- */}
        <section id="faqs">
          <FAQSection
            faqs={[
              {
                question: "What are the salary rights of WPL players?",
                answer:
                  "WPL athletes are entitled to guaranteed salary, timely payments, insurance coverage, and written payment slips as per BCCI rules.",
              },
              {
                question: "Can WPL players file harassment complaints?",
                answer:
                  "Yes. Women players are protected under POSH Act, IPC Section 354/354D, and BCCI’s internal committees.",
              },
              {
                question: "Can a WPL contract be terminated?",
                answer:
                  "Only with written notice, valid reasons, and full payment settlement.",
              },
            ]}
          />
        </section>

        <FAQSchema
          faqs={[
            {
              q: "What legal rights do WPL players have?",
              a: "They have rights related to salary, contracts, harassment protection, cyber safety, and discrimination laws.",
            },
            {
              q: "Can women athletes report online abuse?",
              a: "Yes, they can report on cybercrime.gov.in under women-related complaints.",
            },
            {
              q: "Are WPL salaries legally protected?",
              a: "Yes, under BCCI contract rules and employment laws.",
            },
          ]}
        />
      </ArticleLayout>
    </>
  );
}
