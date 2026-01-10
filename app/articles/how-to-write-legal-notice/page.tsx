import type { Metadata } from "next";
import FAQSection from "@/components/ui/Faq";
import FAQSchema from "@/components/seo/FAQSchema";
import ArticleSchema from "@/components/seo/ArticleSchema";
import ArticleLayout from "@/components/layout/ArticleLayout";
import Heading from "@/components/layout/Heading";

/* INLINE SVG — ZERO JS */
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
  title: "How to Write a Legal Notice in India (2026 Guide)",
  description:
    "Step-by-step guide on writing a legal notice in India. Includes format, structure, sample notice, and legal requirements under Indian law.",
  keywords: [
    "how to write legal notice",
    "legal notice format",
    "legal notice India",
    "legal notice sample",
    "draft legal notice",
  ],
  alternates: {
    canonical: "https://legalmeter.in/articles/how-to-write-legal-notice",
  },
  openGraph: {
    title: "How to Write a Legal Notice in India (2026 Guide)",
    description:
      "Complete 2026 guide for drafting a legal notice in India with format, examples, and legal requirements.",
    url: "https://legalmeter.in/articles/how-to-write-legal-notice",
    siteName: "LegalMeter India",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://legalmeter.in/og/how-to-write-legal-notice.jpg",
        width: 1200,
        height: 630,
        alt: "How to Write a Legal Notice",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <ArticleSchema
        title="How to Write a Legal Notice in India (2026 Guide)"
        description="Detailed Indian guide for drafting a legal notice with format, structure, and examples."
        date="2026-01-01"
        url="https://legalmeter.in/articles/how-to-write-legal-notice"
      />

      <ArticleLayout
        title="How to Write a Legal Notice in India (2026 Guide)"
        updatedAt="January 2026"
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Articles", href: "/articles" },
          { name: "How to Write a Legal Notice" },
        ]}
        TableOfContent={[
          { id: "intro", label: "Introduction" },
          { id: "when", label: "When Do You Need a Legal Notice?" },
          { id: "steps", label: "Steps to Write a Legal Notice" },
          { id: "format", label: "Legal Notice Format (2026)" },
          { id: "tips", label: "Tips to Make a Strong Legal Notice" },
          { id: "sending", label: "How to Send a Legal Notice" },
          { id: "faqs", label: "FAQs" },
        ]}
      >
        {/* INTRO */}
        <section id="intro">
          <Heading id="intro">Introduction</Heading>
          <p className="mt-3 text-slate-700 leading-relaxed">
            A legal notice is a formal written communication sent to a person,
            company, landlord, employer, or any other party to inform them of a
            legal grievance. It warns them that legal action may be taken if the
            issue is not resolved.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Legal notices are used in property disputes, consumer complaints,
            loan defaults, contract breaches, employer-employee conflicts, and
            many other situations.
          </p>
        </section>

        {/* WHEN */}
        <section id="when">
          <Heading id="when">When Do You Need a Legal Notice?</Heading>

          <ul className="mt-4 space-y-2 text-slate-700 text-sm">
            {[
              "Unpaid dues or loan defaults",
              "Property or landlord-tenant disputes",
              "Consumer complaint against a seller/company",
              "Cheque bounce / Section 138 NI Act",
              "Breach of contract or agreement",
              "Employment termination or salary disputes",
              "Family disputes (limited cases)",
            ].map((item, i) => (
              <li key={i} className="flex gap-2 items-center min-h-[24px]">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* STEPS */}
        <section id="steps">
          <Heading id="steps">Steps to Write a Legal Notice</Heading>

          <div className="mt-6 space-y-5">
            {[
              [
                "Step 1 — Identify the Purpose of the Notice",
                "Clearly define the issue, such as payment dispute, harassment, breach of contract, etc.",
              ],
              [
                "Step 2 — Collect All Evidence",
                "Gather invoices, agreements, chats, emails, contracts, or photos related to the dispute.",
              ],
              [
                "Step 3 — Mention Full Details of Both Parties",
                "Write the complete name, address, email, and contact number of sender and receiver.",
              ],
              [
                "Step 4 — Clearly Explain the Issue and Timeline",
                "State what happened, dates, and how the dispute arose.",
              ],
              [
                "Step 5 — Specify Your Legal Claim or Demand",
                "Mention what you want: refund, payment, possession, apology, or other relief.",
              ],
              [
                "Step 6 — Give a Deadline to Respond",
                "Most legal notices give 7–30 days to reply.",
              ],
              [
                "Step 7 — Mention Possible Legal Action",
                "Clearly state that you will take legal steps if they fail to respond.",
              ],
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="border rounded-lg p-4 bg-white min-h-[85px]"
              >
                <h3 className="text-indigo-600 font-semibold">{title}</h3>
                <p className="mt-1 text-slate-700">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FORMAT */}
        <section id="format">
          <Heading id="format">Legal Notice Format (2026)</Heading>

          <div className="mt-4 p-4 border rounded-lg bg-white text-sm leading-relaxed text-slate-700">
            <p>
              <strong>LEGAL NOTICE</strong>
            </p>
            <p className="mt-2">
              From:
              <br />
              [Your Name]
              <br />
              [Address]
              <br />
              [Mobile Number]
              <br />
              [Email]
            </p>

            <p className="mt-3">
              To,
              <br />
              [Recipient Name]
              <br />
              [Recipient Address]
            </p>

            <p className="mt-4">
              Dear Sir/Madam,
              <br />
              <br />
              This notice is being issued to you regarding{" "}
              <strong>[mention issue]</strong>. Despite repeated reminders, you
              have failed to comply with the agreed terms.
            </p>

            <p className="mt-3">
              You are hereby called upon to{" "}
              <strong>[refund/pay/resolve issue]</strong> within
              <strong> [__ days] </strong>. Failure to do so will leave me with
              no option but to initiate legal proceedings against you at your
              sole risk and cost.
            </p>

            <p className="mt-3">
              Sincerely,
              <br />
              [Your Name]
            </p>
          </div>

          <p className="mt-3 text-xs text-slate-500">
            Note: It is recommended to consult a lawyer for complex legal
            disputes.
          </p>
        </section>

        {/* TIPS */}
        <section id="tips">
          <Heading id="tips">Tips to Make a Strong Legal Notice</Heading>

          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {[
              "Keep the language clear and professional",
              "Avoid emotional or abusive words",
              "Mention all facts with dates",
              "Attach supporting documents if sending via email",
              "Give a reasonable response time",
              "Always keep a copy of the notice",
            ].map((t, i) => (
              <li key={i} className="flex gap-2 items-center min-h-[24px]">
                <CheckIcon />
                {t}
              </li>
            ))}
          </ul>
        </section>

        {/* SENDING */}
        <section id="sending">
          <Heading id="sending">How to Send a Legal Notice</Heading>

          <ol className="mt-4 space-y-3 text-slate-700">
            <li className="border p-4 rounded-lg bg-white">
              <strong>1. Registered Post (Speed Post)</strong>
              <br />
              The most preferred method. Always keep tracking slip.
            </li>
            <li className="border p-4 rounded-lg bg-white">
              <strong>2. Email</strong>
              <br />
              You can send a signed PDF copy.
            </li>
            <li className="border p-4 rounded-lg bg-white">
              <strong>3. Lawyer Delivery</strong>
              <br />A lawyer can issue and dispatch the notice on your behalf.
            </li>
          </ol>
        </section>

        {/* FAQ */}
        <section id="faqs">
          <FAQSection
            faqs={[
              {
                question: "Is a lawyer required to issue a legal notice?",
                answer:
                  "No. You can draft and send a legal notice yourself, but for complex disputes, a lawyer is recommended.",
              },
              {
                question: "How many days should I give for a response?",
                answer: "Usually 7 to 30 days depending on the matter.",
              },
              {
                question: "Is legal notice mandatory before filing a case?",
                answer:
                  "For many civil cases (like recovery, property, contracts), yes. For criminal matters, it is not mandatory.",
              },
            ]}
          />
        </section>

        <FAQSchema
          faqs={[
            {
              q: "How do I write a legal notice?",
              a: "Mention parties, issue, facts, demand, deadline, and possible legal action.",
            },
            {
              q: "Is a lawyer required?",
              a: "No, but recommended for complex disputes.",
            },
            {
              q: "How do I send a legal notice?",
              a: "By speed post, email, or through a lawyer.",
            },
          ]}
        />
      </ArticleLayout>
    </>
  );
}
