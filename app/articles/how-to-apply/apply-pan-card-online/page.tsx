import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import Heading from "@/components/layout/Heading";
import FAQSection from "@/components/ui/Faq";
import FAQSchema from "@/components/seo/FAQSchema";
import ArticleSchema from "@/components/seo/ArticleSchema";

/* -----------------------------------------------------------
   INLINE CHECK ICON
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
  title: "PAN Card Apply Online 2026 — New PAN, Correction & Reprint | ₹107 Fee, Instant e-PAN",
  description:
    "2026 step-by-step guide on applying for a PAN Card online in India through NSDL and UTIITSL. Includes fees, documents required, and ePAN download.",
  alternates: {
    canonical:
      "https://legalmeter.in/articles/how-to-apply/apply-pan-card-online",
  },
  openGraph: {
    title: "How to Apply for PAN Card Online in India (2026 Guide)",
    description:
      "Learn how to apply for PAN online using Aadhaar eKYC, NSDL, and UTIITSL. Includes fees, documents, and ePAN download steps.",
    url: "https://legalmeter.in/articles/how-to-apply/apply-pan-card-online",
    siteName: "LegalMeter India",
    locale: "en_IN",
    type: "article",
  },
};

/* -----------------------------------------------------------
   MAIN PAN PAGE
----------------------------------------------------------- */
export default function Page() {
  return (
    <>
      {/* Article Schema */}
      <ArticleSchema
        title="How to Apply for PAN Card Online in India (2026 Guide)"
        description="A complete guide for applying for a new PAN Card or making corrections online using NSDL or UTIITSL."
        date="2026-01-01"
        url="https://legalmeter.in/articles/how-to-apply/apply-pan-card-online"
      />

      <ArticleLayout
        title="How to Apply for PAN Card Online in India (2026 Guide)"
        updatedAt="January 2026"
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Articles", href: "/articles" },
          { name: "How to Apply", href: "/articles/how-to-apply" },
          { name: "PAN Card Application" },
        ]}
        TableOfContent={[
          { id: "intro", label: "Introduction" },
          { id: "documents", label: "Documents Required" },
          { id: "steps", label: "Steps to Apply Online" },
          { id: "fees", label: "PAN Card Fees in 2026" },
          { id: "epan", label: "How to Download ePAN" },
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
              A PAN Card (Permanent Account Number) is mandatory for financial
              activities such as opening a bank account, filing ITR, buying
              property, and investments. You can apply for a PAN online using
              your Aadhaar number through NSDL or UTIITSL.
            </p>

            <p className="mt-3 text-slate-700 leading-relaxed">
              This guide covers the complete online PAN application process,
              documentation, fees, and how to download your ePAN instantly.
            </p>
          </div>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* -----------------------------------------------------------
            DOCUMENTS REQUIRED
        ----------------------------------------------------------- */}
        <section id="documents" className="space-y-4">
          <Heading id="documents">Documents Required for PAN Card</Heading>

          <ul className="grid sm:grid-cols-2 gap-2 text-slate-700 text-sm mt-4">
            {[
              "Aadhaar Card (mandatory for online eKYC)",
              "Mobile number linked with Aadhaar",
              "Passport-size photo (if offline upload)",
              "Signature image (jpeg/png)",
              "Birth proof (if required)",
              "Address proof (Aadhaar/Utility Bill)",
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
            Steps to Apply for PAN Card Online (2026)
          </Heading>

          <div className="space-y-4">
            {[
              [
                "Step 1 — Visit NSDL or UTIITSL",
                "NSDL: tin.tin.nsdl.com | UTIITSL: utiitsl.com.",
              ],
              [
                "Step 2 — Select ‘New PAN’ or ‘PAN Correction’",
                "Choose the appropriate form based on your need.",
              ],
              [
                "Step 3 — Choose ‘Aadhaar-based eKYC’",
                "This allows full online processing without physical documents.",
              ],
              [
                "Step 4 — Fill Applicant Details",
                "Provide your name, DOB, mobile number, and address.",
              ],
              [
                "Step 5 — Upload Photo & Signature (if required)",
                "For full offline upload mode, images must be uploaded.",
              ],
              [
                "Step 6 — Pay the PAN Fee",
                "Pay using UPI, card, or net banking.",
              ],
              [
                "Step 7 — Verify Aadhaar via OTP",
                "Complete eKYC instantly using OTP on your Aadhaar-linked number.",
              ],
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
          <Heading id="fees">PAN Card Fees in 2026</Heading>

          <ul className="list-disc pl-5 text-slate-700 space-y-2">
            <li>ePAN only: ₹66</li>
            <li>PAN with physical card (within India): ₹101</li>
            <li>PAN reprint: ₹50 – ₹101</li>
            <li>Foreign communication address: ₹1,011</li>
          </ul>

          <p className="text-sm text-slate-500 mt-2">
            *Fees vary slightly between NSDL and UTIITSL.
          </p>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* -----------------------------------------------------------
            ePAN DOWNLOAD
        ----------------------------------------------------------- */}
        <section id="epan" className="space-y-4">
          <Heading id="epan">How to Download Your ePAN</Heading>

          <p className="text-slate-700 leading-relaxed">
            After successful processing, you can download ePAN instantly.
          </p>

          <ul className="list-disc pl-5 text-slate-700 space-y-2 mt-2">
            <li>Visit NSDL or UTIITSL ePAN download page</li>
            <li>Enter PAN number or Acknowledgment number</li>
            <li>Verify OTP on Aadhaar-linked mobile</li>
            <li>Download PDF (password-protected)</li>
          </ul>

          <p className="text-sm text-slate-600 mt-2">
            ePAN password format: First 4 letters of name (capital) + DOB
            (DDMMYY)
          </p>
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
                question: "Is Aadhaar mandatory for PAN?",
                answer:
                  "Yes, Aadhaar is required for applying for a new PAN or making corrections online.",
              },
              {
                question: "How long does online PAN take?",
                answer:
                  "ePAN is usually issued within 24–72 hours after Aadhaar verification.",
              },
              {
                question: "Can I correct my PAN details online?",
                answer:
                  "Yes, corrections can be made through NSDL or UTIITSL using Aadhaar eKYC.",
              },
            ]}
          />
        </section>

        {/* FAQ Schema */}
        <FAQSchema
          faqs={[
            {
              q: "How to apply for PAN card online?",
              a: "Visit NSDL or UTIITSL, fill the form, verify using Aadhaar OTP, and download ePAN.",
            },
            {
              q: "Is Aadhaar required for PAN?",
              a: "Yes, Aadhaar is mandatory for PAN application.",
            },
            {
              q: "How long does ePAN processing take?",
              a: "Most ePANs are issued within 1–3 days.",
            },
          ]}
        />
      </ArticleLayout>
    </>
  );
}
