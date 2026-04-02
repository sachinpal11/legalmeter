import type { Metadata } from "next";
import FAQSchema from "@/components/seo/FAQSchema";
import FAQSection from "@/components/ui/Faq";
import ArticleSchema from "@/components/seo/ArticleSchema";
import ArticleLayout from "@/components/layout/ArticleLayout";
import Heading from "@/components/layout/Heading";

/* INLINE ICONS — ZERO JS */
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
  title: "Cybercrime Complaint Kaise Kare — Online FIR on cybercrime.gov.in (Free Guide 2026)",
  description:
    "Step-by-step guide to filing a cybercrime complaint online in India using the National Cybercrime Portal. Covers cyber fraud, online scams, harassment, and digital crime reporting.",
  keywords: [
    "cybercrime complaint online",
    "cyber crime report India",
    "file cybercrime complaint",
    "cybercrime.gov.in",
    "online scam complaint",
  ],
  alternates: {
    canonical:
      "https://legalmeter.in/articles/how-to-file-cybercrime-complaint",
  },
  openGraph: {
    title: "How to File a Cybercrime Complaint Online in India (2026 Guide)",
    description:
      "2026 guide to file cybercrime complaints online in India. Includes steps, documents, portal link, and tracking process.",
    url: "https://legalmeter.in/articles/how-to-file-cybercrime-complaint",
    siteName: "LegalMeter India",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://legalmeter.in/og/cybercrime-complaint.jpg",
        width: 1200,
        height: 630,
        alt: "How to File Cybercrime Complaint Online",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <ArticleSchema
        title="How to File a Cybercrime Complaint Online in India (2026 Guide)"
        description="Step-by-step cybercrime reporting guide with portal link and tips."
        date="2026-01-01"
        url="https://legalmeter.in/articles/how-to-file-cybercrime-complaint"
      />

      <ArticleLayout
        title="How to File a Cybercrime Complaint Online in India (2026 Guide)"
        updatedAt="January 2026"
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Articles", href: "/articles" },
          { name: "Cybercrime Complaint" },
        ]}
        TableOfContent={[
          { id: "intro", label: "Introduction" },
          { id: "types", label: "Types of Cybercrimes You Can Report" },
          { id: "documents", label: "Documents & Evidence Needed" },
          { id: "steps", label: "How to File Cybercrime Complaint Online" },
          { id: "women-child", label: "Special Portal for Women & Children" },
          { id: "tracking", label: "How to Track Your Complaint" },
          { id: "faqs", label: "FAQs" },
        ]}
      >
        {/* INTRO */}
        <section id="intro">
          <Heading id="intro">Introduction</Heading>

          <p className="mt-3 text-slate-700 leading-relaxed">
            The Ministry of Home Affairs allows Indian citizens to file
            cybercrime complaints online through the National Cybercrime
            Reporting Portal. You can report online fraud, financial scams,
            identity theft, cyberbullying, social media harassment, and other
            digital crimes.
          </p>

          <p className="mt-3 text-slate-700 leading-relaxed">
            Complaints registered on the portal are forwarded to the concerned
            state cyber police for further action.
          </p>
        </section>

        {/* TYPES OF CYBERCRIMES */}
        <section id="types">
          <Heading id="types">Types of Cybercrimes You Can Report</Heading>

          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {[
              "Online financial fraud (UPI, credit card, banking fraud)",
              "Online shopping fraud",
              "Social media harassment or impersonation",
              "Cyberbullying or stalking",
              "WhatsApp, Instagram, or Facebook hacking",
              "Job scam or lottery scam",
              "Sextortion or blackmail",
              "Online child abuse content",
            ].map((t, i) => (
              <li key={i} className="flex items-center gap-2 min-h-[24px]">
                <CheckIcon />
                {t}
              </li>
            ))}
          </ul>
        </section>

        {/* DOCUMENTS */}
        <section id="documents">
          <Heading id="documents">Documents & Evidence Needed</Heading>

          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {[
              "Screenshots of chats, posts, or fraud messages",
              "Bank statements or transaction ID (if financial fraud)",
              "Links/URLs of abusive or fraudulent content",
              "Email screenshots or phone numbers involved",
              "Any digital proof related to the incident",
            ].map((i, j) => (
              <li key={j} className="flex items-center gap-2 min-h-[24px]">
                <CheckIcon />
                {i}
              </li>
            ))}
          </ul>
        </section>

        {/* STEPS */}
        <section id="steps">
          <Heading id="steps">How to File Cybercrime Complaint Online</Heading>

          <div className="mt-6 space-y-5">
            {[
              [
                "Step 1 — Visit the National Cybercrime Portal",
                "Go to: https://cybercrime.gov.in (official government website).",
              ],
              [
                "Step 2 — Choose ‘File a Complaint’",
                "Select between ‘Report Women/Child Related Crime’ or ‘Report Other Cybercrimes’.",
              ],
              [
                "Step 3 — Verify Mobile Number With OTP",
                "Enter your mobile number and verify identity using OTP.",
              ],
              [
                "Step 4 — Fill Incident Details",
                "Enter date, time, platform, account details, and a clear description of what happened.",
              ],
              [
                "Step 5 — Upload Evidence",
                "Upload screenshots, links, bank proofs, or any available documents.",
              ],
              [
                "Step 6 — Submit & Save Acknowledgment Number",
                "This number is required to track your complaint.",
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

        {/* WOMEN & CHILD */}
        <section id="women-child">
          <Heading id="women-child">
            Special Portal for Women & Children
          </Heading>

          <p className="mt-3 text-slate-700 leading-relaxed">
            For crimes involving women or children (harassment, blackmail,
            exploitation), a separate category is available on the portal. These
            complaints receive priority handling.
          </p>

          <p className="mt-3">
            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline"
            >
              Visit Cybercrime Portal
            </a>
          </p>
        </section>

        {/* TRACKING */}
        <section id="tracking">
          <Heading id="tracking">How to Track Your Complaint</Heading>

          <p className="mt-3 text-slate-700">
            Use your acknowledgment number on the same cybercrime portal under
            “Check Status”.
          </p>

          <ul className="mt-3 list-disc ml-5 text-slate-700">
            <li>Pending</li>
            <li>Under Verification</li>
            <li>Transferred to Local Police</li>
            <li>Action Taken</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faqs">
          <FAQSection
            faqs={[
              {
                question: "Is filing a cybercrime complaint online free?",
                answer:
                  "Yes, filing complaints on the national cybercrime portal is completely free.",
              },
              {
                question: "Can I file a cybercrime complaint anonymously?",
                answer:
                  "You can report anonymously for women/child crimes, but detailed complaints require identity verification.",
              },
              {
                question: "Is OTP verification mandatory?",
                answer:
                  "Yes, OTP is required to confirm identity and avoid false complaints.",
              },
            ]}
          />
        </section>

        <FAQSchema
          faqs={[
            {
              q: "How can I file a cybercrime complaint?",
              a: "Visit cybercrime.gov.in, verify mobile, fill details, upload evidence, and submit.",
            },
            {
              q: "Is the cybercrime portal free?",
              a: "Yes, it is free for all citizens.",
            },
            {
              q: "How do I track my cybercrime complaint?",
              a: "Use the acknowledgment number on the portal under “Check Status”.",
            },
          ]}
        />
      </ArticleLayout>
    </>
  );
}
