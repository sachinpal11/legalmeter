import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import Heading from "@/components/layout/Heading";
import FAQSection from "@/components/ui/Faq";
import FAQSchema from "@/components/seo/FAQSchema";
import ArticleSchema from "@/components/seo/ArticleSchema";

/* Inline Icon */
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
    "WPL 2026 legal guide explaining rights of women athletes in India: salaries, contracts, harassment laws, cybercrime reporting, discrimination, termination rules, and complaint filing.",
  keywords: [
    "WPL 2026",
    "women athletes rights India",
    "sports law India",
    "BCCI contract rules",
    "WPL salary rules",
    "WPL players salary",
    "athlete harassment complaint",
    "sports legal rights India",
    "women cricket laws",
  ],
  alternates: {
    canonical: "https://legalmeter.in/articles/wpl-women-athlete-rights",
  },
  openGraph: {
    title:
      "WPL 2026: Legal Rights of Women Athletes in India (Contract, Salary, Harassment Laws)",
    description:
      "Complete legal guide explaining rights of WPL women athletes: salary rules, sports contracts, harassment laws, cybercrime complaints, and equal pay laws.",
    url: "https://legalmeter.in/articles/wpl-women-athlete-rights",
    siteName: "LegalMeter India",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://legalmeter.in/og/wpl-women-athlete-rights.jpg",
        width: 1200,
        height: 630,
        alt: "WPL Women Athlete Rights",
      },
    ],
  },
};

/* ------------------------------------------------------------- */

export default function Page() {
  return (
    <>
      <ArticleSchema
        title="WPL 2026: Legal Rights of Women Athletes in India"
        description="Complete legal guide covering WPL salary rules, contracts, harassment laws, discrimination laws, cybercrime reporting, and termination rules."
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
          { id: "importance", label: "Why Legal Rights Matter in WPL 2026" },
          { id: "salary", label: "WPL Salary & Pay Rules" },
          { id: "salary-updates", label: "WPL 2026 Salary Highlights" },
          { id: "contract", label: "Contract Rights of WPL Players" },
          { id: "contract-clauses", label: "Mandatory Contract Clauses" },
          { id: "harassment", label: "Harassment & Safety Laws" },
          {
            id: "cyberbullying",
            label: "Cyberbullying & Online Abuse Protection",
          },
          { id: "cybercrime", label: "How to File Cybercrime Complaint" },
          { id: "discrimination", label: "Gender Discrimination Laws" },
          { id: "insurance", label: "Insurance Rights for Athletes" },
          { id: "discipline", label: "WPL 2026 Disciplinary Rules" },
          { id: "termination", label: "Contract Termination Rules" },
          { id: "report", label: "How to Report Misconduct" },
          { id: "related", label: "Related Legal Guides" },
          { id: "faqs", label: "FAQs" },
        ]}
      >
        {/* INTRO ----------------------------------------------------- */}
        <section id="intro">
          <Heading id="intro">Introduction</Heading>

          <p className="mt-3 text-slate-700 leading-relaxed">
            WPL 2026 has transformed women’s cricket in India. With massive
            brand sponsorships, high player salaries, and global broadcasting,
            protecting women athletes’ legal rights has become absolutely
            essential.
          </p>

          <p className="mt-3 text-slate-700 leading-relaxed">
            This in-depth legal guide explains salary rights, contract
            protections, harassment laws, cybercrime complaint steps,
            discrimination safeguards, and termination rules for every WPL
            athlete.
          </p>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* WHY IMPORTANT -------------------------------------------- */}
        <section id="importance">
          <Heading id="importance">
            Why Legal Rights Matter More Than Ever in WPL 2026
          </Heading>

          <p className="mt-3 text-slate-700 leading-relaxed">
            With WPL 2026 crossing over 150 million viewers and franchise
            budgets crossing ₹50 crore, legal conflicts have
            increased—especially around payments, endorsement contracts, online
            abuse, and selection disputes.
          </p>

          <p className="mt-3 text-slate-700 leading-relaxed">
            Understanding legal protections is important not just for WPL stars
            but also for aspiring cricketers, coaches, and support staff.
          </p>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* SALARY --------------------------------------------------- */}
        <section id="salary">
          <Heading id="salary">WPL Salary & Payment Rules (2026)</Heading>

          <p className="mt-3 text-slate-700 leading-relaxed">
            WPL players are protected under BCCI’s standard contract and
            franchise policies. Legally, every player is entitled to:
          </p>

          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>Guaranteed full salary for the season</li>
            <li>Mandatory payment before the deadline</li>
            <li>No deduction without written consent</li>
            <li>Medical & injury insurance</li>
            <li>Right to request payment audit</li>
          </ul>
        </section>

        {/* SALARY UPDATES ------------------------------------------- */}
        <section id="salary-updates" className="mt-10">
          <Heading id="salary-updates">WPL 2026 Salary Highlights</Heading>

          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>Minimum salary for uncapped players: ₹10 lakh</li>
            <li>Top star salary bracket: ₹3–3.6 crore</li>
            <li>Revised match-fee slabs for 2026</li>
            <li>Season performance bonuses</li>
            <li>Brand endorsement revenue shares</li>
          </ul>

          <p className="mt-4 text-slate-700">
            As per BCCI rules, final payments must be released within 45 days of
            tournament completion. Delays can be challenged legally.
          </p>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* CONTRACT ------------------------------------------------- */}
        <section id="contract">
          <Heading id="contract">Contract Rights of WPL Players</Heading>

          <p className="mt-3 text-slate-700">
            Every WPL athlete contract must clearly define:
          </p>

          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>Fee structure & performance bonuses</li>
            <li>Insurance benefits</li>
            <li>Brand endorsement rules</li>
            <li>Travel & accommodation rights</li>
            <li>Termination process</li>
          </ul>
        </section>

        {/* MANDATORY CONTRACT CLAUSES ------------------------------ */}
        <section id="contract-clauses" className="mt-10">
          <Heading id="contract-clauses">Mandatory Contract Clauses</Heading>

          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>Clear payment cycle: advance, mid-season, final</li>
            <li>Injury compensation policy</li>
            <li>Media & social media conduct obligations</li>
            <li>Image rights & commercial usage rules</li>
            <li>NADA/WADA anti-doping compliance</li>
          </ul>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* HARASSMENT ---------------------------------------------- */}
        <section id="harassment">
          <Heading id="harassment">Harassment & Safety Laws</Heading>

          <p className="mt-3 text-slate-700">
            Women athletes are legally protected under:
          </p>

          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>POSH Act (2013) — workplace harassment protection</li>
            <li>IPC Sections 354, 354D — stalking & harassment</li>
            <li>BCCI Internal Complaints Committee (ICC)</li>
            <li>Sports Code 2023 athlete protection rules</li>
          </ul>

          <h3 className="mt-6 text-lg font-semibold text-slate-900">
            Examples of Harassment Complaints in Sports
          </h3>

          <p className="mt-3 text-slate-700">
            Female athletes have recently reported issues such as inappropriate
            behaviour by staff, cyberbullying, mental harassment, and selection
            bias—all covered under Indian law.
          </p>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* CYBERBULLYING ------------------------------------------- */}
        <section id="cyberbullying">
          <Heading id="cyberbullying">
            Cyberbullying & Online Abuse Protection
          </Heading>

          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>Report abusive posts to Instagram/X (24-hour action rule)</li>
            <li>File cyber complaint under IT Act Section 67</li>
            <li>File FIR under IPC 499/500 for defamation</li>
            <li>Send platform takedown notice under IT Rules 2021</li>
          </ul>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* CYBERCRIME ---------------------------------------------- */}
        <section id="cybercrime">
          <Heading id="cybercrime">How to File a Cybercrime Complaint</Heading>

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
            <li>Upload evidence (screenshots, chats, links)</li>
            <li>Submit complaint</li>
            <li>Save acknowledgment number</li>
          </ol>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* DISCRIMINATION ------------------------------------------ */}
        <section id="discrimination">
          <Heading id="discrimination">Gender Discrimination Laws</Heading>

          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>Equal pay protection under Indian labour law</li>
            <li>No discrimination in selection or training</li>
            <li>Right to safe and fair workplace</li>
            <li>Protection under Articles 15 & 16 of the Constitution</li>
          </ul>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* INSURANCE ------------------------------------------------ */}
        <section id="insurance">
          <Heading id="insurance">Insurance Rights of WPL Players</Heading>

          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>Injury insurance during training & matches</li>
            <li>Loss-of-income compensation</li>
            <li>Travel & medical insurance</li>
            <li>Accidental coverage</li>
          </ul>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* DISCIPLINARY RULES -------------------------------------- */}
        <section id="discipline">
          <Heading id="discipline">WPL 2026 Disciplinary Rules</Heading>

          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>On-field Code of Conduct</li>
            <li>Social media guidelines</li>
            <li>Penalty for unprofessional behaviour</li>
            <li>Restrictions on media interactions</li>
          </ul>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* TERMINATION RULES --------------------------------------- */}
        <section id="termination">
          <Heading id="termination">Contract Termination Rules</Heading>

          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>Written notice requirement</li>
            <li>Valid documented reason is mandatory</li>
            <li>Chance to respond before termination</li>
            <li>Full final settlement must be paid</li>
          </ul>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* REPORT MISCONDUCT --------------------------------------- */}
        <section id="report">
          <Heading id="report">How to Report Misconduct</Heading>

          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>BCCI Internal Complaints Committee</li>
            <li>State Women’s Commission</li>
            <li>Local Police Station</li>
            <li>National Cybercrime Portal</li>
          </ul>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* RELATED ARTICLES ---------------------------------------- */}
        <section id="related">
          <Heading id="related">Related Legal Guides</Heading>

          <ul className="mt-4 list-disc pl-6 text-indigo-700 space-y-2">
            <li>
              <a
                href="/articles/file-police-complaint-online"
                className="hover:underline"
              >
                How to File a Police Complaint Online
              </a>
            </li>
            <li>
              <a
                href="/articles/how-to-write-legal-notice"
                className="hover:underline"
              >
                How to Write a Legal Notice
              </a>
            </li>
            <li>
              <a href="/articles/how-to-apply" className="hover:underline">
                How to Apply for Government Documents
              </a>
            </li>
          </ul>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* FAQ ------------------------------------------------------ */}
        <section id="faqs">
          <FAQSection
            faqs={[
              {
                question: "What are the salary rights of WPL players?",
                answer:
                  "WPL players are entitled to guaranteed payment, timely salaries, injury insurance, and performance bonuses.",
              },
              {
                question: "Can WPL players file harassment complaints?",
                answer:
                  "Yes, under POSH Act, IPC Sections 354/354D, and BCCI’s Internal Complaints Committee.",
              },
              {
                question: "How can WPL athletes report cyberbullying?",
                answer:
                  "They may report on cybercrime.gov.in and file FIRs under IT Act & IPC Sections related to defamation and harassment.",
              },
            ]}
          />
        </section>

        {/* FAQ SCHEMA ---------------------------------------------- */}
        <FAQSchema
          faqs={[
            {
              q: "What legal rights do WPL players have?",
              a: "They have rights related to salary, contract protection, harassment safety, cybercrime reporting, and discrimination laws.",
            },
            {
              q: "Are WPL salaries legally protected?",
              a: "Yes. Payments are governed under BCCI’s contract rules with strict deadlines.",
            },
            {
              q: "How can women athletes report misconduct?",
              a: "They may file complaints with BCCI ICC, State Women’s Commission, police, or cybercrime portal.",
            },
          ]}
        />
      </ArticleLayout>
    </>
  );
}
