import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import Heading from "@/components/layout/Heading";
import FAQSection from "@/components/ui/Faq";
import FAQSchema from "@/components/seo/FAQSchema";
import ArticleSchema from "@/components/seo/ArticleSchema";

/* -----------------------------------------------------------
   INLINE ICONS (NO JS)
----------------------------------------------------------- */
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
  title: "How to Apply for Passport Online in India (2026 Guide)",
  description:
    "Step-by-step 2026 guide on how to apply for a passport online in India. Includes documents required, fees, appointment booking, and official links.",
  alternates: {
    canonical:
      "https://legalmeter.in/articles/how-to-apply/apply-passport-online",
  },
  openGraph: {
    title: "How to Apply for Passport Online in India (2026 Guide)",
    description:
      "Complete 2026 guide with steps, documents, fees, appointment booking, and official Passport Seva links.",
    url: "https://legalmeter.in/articles/how-to-apply/apply-passport-online",
    siteName: "LegalMeter India",
    locale: "en_IN",
    type: "article",
  },
};

/* -----------------------------------------------------------
   MAIN PASSPORT PAGE
----------------------------------------------------------- */
export default function Page() {
  return (
    <>
      {/* Article Schema */}
      <ArticleSchema
        title="How to Apply for Passport Online in India (2026 Guide)"
        description="A complete step-by-step guide for applying for a new passport, renewal, or reissue online in India."
        date="2026-01-01"
        url="https://legalmeter.in/articles/how-to-apply/apply-passport-online"
      />

      <ArticleLayout
        title="How to Apply for Passport Online in India (2026 Guide)"
        updatedAt="January 2026"
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Articles", href: "/articles" },
          { name: "How to Apply", href: "/articles/how-to-apply" },
          { name: "Passport Application" },
        ]}
        TableOfContent={[
          { id: "intro", label: "Introduction" },
          { id: "documents", label: "Documents Required" },
          { id: "steps", label: "Steps to Apply Online" },
          { id: "fees", label: "Passport Fees in 2026" },
          { id: "appointment", label: "Booking Your Appointment" },
          { id: "tracking", label: "How to Track Passport Status" },
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
              The Passport Seva system makes it easy to apply for a fresh
              passport, renew an expiring passport, or reissue a damaged or lost
              one. Most of the process is completed online, followed by a visit
              to a Passport Seva Kendra (PSK) or Post Office Passport Seva
              Kendra (POPSK).
            </p>

            <p className="mt-3 text-slate-700 leading-relaxed">
              This guide explains required documents, fees, appointment booking,
              and police verification for 2026.
            </p>
          </div>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* -----------------------------------------------------------
            DOCUMENTS REQUIRED
        ----------------------------------------------------------- */}
        <section id="documents" className="space-y-4">
          <Heading id="documents">
            Documents Required for Passport Application
          </Heading>

          <ul className="grid sm:grid-cols-2 gap-2 text-slate-700 text-sm mt-4">
            {[
              "Aadhaar Card",
              "Birth Certificate (for minors)",
              "PAN Card (optional)",
              "10th/12th Marksheet (age proof)",
              "Address proof (Aadhaar/Utility Bill/Rent Agreement)",
              "Passport size photographs (if required)",
            ].map((item, i) => (
              <li key={i} className="flex gap-2 items-center min-h-[24px]">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* -----------------------------------------------------------
            STEPS TO APPLY ONLINE
        ----------------------------------------------------------- */}
        <section id="steps" className="space-y-4">
          <Heading id="steps">
            Steps to Apply for Passport Online (2026)
          </Heading>

          <div className="space-y-4">
            {[
              [
                "Step 1 — Visit Passport Seva Portal",
                "Go to the official website: passportindia.gov.in.",
              ],
              [
                "Step 2 — Register/Login",
                "Create an account and verify your email ID.",
              ],
              [
                "Step 3 — Choose 'Apply for Fresh Passport' or 'Reissue Passport'",
                "Select your required service.",
              ],
              [
                "Step 4 — Fill the Application Form",
                "Enter personal details, address, emergency contact, and travel information.",
              ],
              [
                "Step 5 — Upload Supporting Documents",
                "Upload Aadhaar, address proof, and other required documents.",
              ],
              [
                "Step 6 — Pay Passport Fees",
                "Payment is done via net banking, UPI, credit/debit card.",
              ],
              ["Step 7 — Book Appointment", "Select the nearest PSK or POPSK."],
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="border rounded-lg p-4 bg-white min-h-[85px]"
              >
                <h3 className="text-indigo-600 font-semibold">{title}</h3>
                <p className="text-slate-700 mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* -----------------------------------------------------------
            FEES
        ----------------------------------------------------------- */}
        <section id="fees" className="space-y-4">
          <Heading id="fees">Passport Fees in India (2026)</Heading>

          <ul className="list-disc pl-5 text-slate-700 space-y-2">
            <li>Normal Passport (36 pages): ₹1,500</li>
            <li>Normal Passport (60 pages): ₹2,000</li>
            <li>Tatkal Passport: ₹3,500 – ₹4,000</li>
            <li>Minor Passport: ₹1,000</li>
          </ul>

          <p className="text-sm text-slate-500 mt-2">
            *Fees may vary slightly based on state or service center.
          </p>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* -----------------------------------------------------------
            APPOINTMENT
        ----------------------------------------------------------- */}
        <section id="appointment" className="space-y-4">
          <Heading id="appointment">Booking Your Passport Appointment</Heading>

          <p className="text-slate-700 leading-relaxed">
            Appointment availability depends on your city and season. Tatkal
            appointments fill up quickly, so apply early.
          </p>

          <ul className="list-disc pl-5 text-slate-700 space-y-2 mt-2">
            <li>Choose nearest PSK/POPSK</li>
            <li>Select convenient date & time</li>
            <li>Download Appointment Receipt</li>
            <li>Carry originals + photocopies of documents</li>
          </ul>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* -----------------------------------------------------------
            TRACKING
        ----------------------------------------------------------- */}
        <section id="tracking" className="space-y-4">
          <Heading id="tracking">How to Track Your Passport Status</Heading>

          <p className="text-slate-700 leading-relaxed">
            You can track your application status using the Application File
            Number on the Passport Seva portal.
          </p>

          <ul className="list-disc pl-5 text-slate-700 space-y-2 mt-2">
            <li>Application Submitted</li>
            <li>Under Review</li>
            <li>Police Verification</li>
            <li>Passport Printing</li>
            <li>Dispatched</li>
            <li>Delivered</li>
          </ul>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* -----------------------------------------------------------
            FAQ SECTION
        ----------------------------------------------------------- */}
        <section id="faqs">
          <FAQSection
            title="Frequently Asked Questions"
            faqs={[
              {
                question: "How long does it take to get a passport?",
                answer:
                  "Normal applications take 7–14 days. Tatkal takes 1–3 days after verification.",
              },
              {
                question: "Is police verification mandatory?",
                answer:
                  "Yes, except in rare pre-verified cases. Police will visit your home.",
              },
              {
                question: "Can I apply without Aadhaar?",
                answer:
                  "Yes, but Aadhaar speeds up verification and reduces documentation.",
              },
            ]}
          />
        </section>

        {/* FAQ Schema */}
        <FAQSchema
          faqs={[
            {
              q: "How to apply for passport online?",
              a: "Visit passportindia.gov.in, fill the form, upload documents, pay fees, and book appointment.",
            },
            {
              q: "What is the passport fee in 2026?",
              a: "Fees range from ₹1,500 to ₹4,000 depending on type and Tatkal.",
            },
            {
              q: "Is police verification required?",
              a: "Yes, for most passport applications.",
            },
          ]}
        />
      </ArticleLayout>
    </>
  );
}
