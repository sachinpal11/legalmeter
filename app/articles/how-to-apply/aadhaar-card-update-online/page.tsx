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
  title: "How to Update Aadhaar Card Details Online (2026 Guide)",
  description:
    "Complete 2026 step-by-step guide on updating Aadhaar details online, including name, address, DoB, mobile number, and demographic updates via UIDAI.",
  alternates: {
    canonical:
      "https://legalmeter.in/articles/how-to-apply/aadhaar-card-update-online",
  },
  openGraph: {
    title: "How to Update Aadhaar Card Details Online (2026 Guide)",
    description:
      "Learn how to update Aadhaar address, name, date of birth, and more using UIDAI’s online and offline update process.",
    url: "https://legalmeter.in/articles/how-to-apply/aadhaar-card-update-online",
    siteName: "LegalMeter India",
    locale: "en_IN",
    type: "article",
  },
};

/* -----------------------------------------------------------
   MAIN AADHAAR UPDATE PAGE
----------------------------------------------------------- */
export default function Page() {
  return (
    <>
      {/* Article Schema */}
      <ArticleSchema
        title="How to Update Aadhaar Card Details Online (2026 Guide)"
        description="Step-by-step instructions for updating Aadhaar demographic information such as address, name, mobile number, and date of birth."
        date="2026-01-01"
        url="https://legalmeter.in/articles/how-to-apply/aadhaar-card-update-online"
      />

      <ArticleLayout
        title="How to Update Aadhaar Card Details Online (2026 Guide)"
        updatedAt="January 2026"
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Articles", href: "/articles" },
          { name: "How to Apply", href: "/articles/how-to-apply" },
          { name: "Aadhaar Update" },
        ]}
        TableOfContent={[
          { id: "intro", label: "Introduction" },
          { id: "types", label: "Types of Aadhaar Updates" },
          { id: "documents", label: "Documents Required" },
          { id: "online", label: "How to Update Aadhaar Online" },
          { id: "offline", label: "How to Update Aadhaar Offline" },
          { id: "check-status", label: "How to Check Update Status" },
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
              UIDAI allows Aadhaar holders to update demographic details such as
              name, date of birth, gender, mobile number, and address. Some
              updates can be made online, while others require biometric
              verification at an Aadhaar Seva Kendra.
            </p>

            <p className="mt-3 text-slate-700 leading-relaxed">
              This guide covers the complete 2026 online and offline Aadhaar
              update process with required documents and official links.
            </p>
          </div>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* -----------------------------------------------------------
            TYPES OF UPDATES
        ----------------------------------------------------------- */}
        <section id="types" className="space-y-4">
          <Heading id="types">Types of Aadhaar Updates</Heading>

          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li>Address Update</li>
            <li>Name Correction/Update</li>
            <li>Date of Birth Correction</li>
            <li>Gender Update</li>
            <li>Mobile Number Update</li>
            <li>Email ID Update</li>
            <li>Language Update</li>
          </ul>

          <p className="text-sm text-slate-600">
            *Biometric updates (fingerprint, iris, photo) must be done at an
            Aadhaar center.
          </p>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* -----------------------------------------------------------
            DOCUMENTS REQUIRED
        ----------------------------------------------------------- */}
        <section id="documents" className="space-y-4">
          <Heading id="documents">Documents Required</Heading>

          <ul className="grid sm:grid-cols-2 gap-2 text-slate-700 text-sm mt-4">
            {[
              "Aadhaar Card",
              "Aadhaar-linked mobile number",
              "Address proof (electricity bill, rent agreement, passport, etc.)",
              "DOB proof (birth certificate, 10th marksheet)",
              "Identity proof (PAN, voter ID, etc.)",
              "Marriage certificate (for name change after marriage)",
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
            ONLINE AADHAAR UPDATE
        ----------------------------------------------------------- */}
        <section id="online" className="space-y-4">
          <Heading id="online">How to Update Aadhaar Online (2026)</Heading>

          <p className="text-slate-700 leading-relaxed">
            UIDAI allows online Aadhaar updates for address, name, gender, DoB,
            and language via the myAadhaar portal.
          </p>

          <div className="space-y-4 mt-4">
            {[
              [
                "Step 1 — Visit myAadhaar Portal",
                "Go to: myaadhaar.uidai.gov.in.",
              ],
              [
                "Step 2 — Login with Aadhaar",
                "Enter your Aadhaar number and verify OTP.",
              ],
              [
                "Step 3 — Choose 'Update Aadhaar Online'",
                "Select the demographic field you want to update.",
              ],
              [
                "Step 4 — Upload Supporting Documents",
                "Upload scanned images of proof documents.",
              ],
              ["Step 5 — Pay Online Update Fee", "Fee for online update: ₹50."],
              [
                "Step 6 — Submit Request",
                "Note down your Update Request Number (URN).",
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

          <p className="text-sm text-slate-500 mt-2">
            *Mobile number update cannot be done online. You must visit an
            Aadhaar center.
          </p>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* -----------------------------------------------------------
            OFFLINE AADHAAR UPDATE
        ----------------------------------------------------------- */}
        <section id="offline" className="space-y-4">
          <Heading id="offline">How to Update Aadhaar Offline</Heading>

          <p className="text-slate-700 leading-relaxed">
            Some updates such as mobile number, biometrics, and DoB (major
            changes) require a visit to an Aadhaar Seva Kendra.
          </p>

          <ul className="list-disc pl-5 space-y-2 text-slate-700 mt-2">
            <li>Visit the nearest Aadhaar Seva Kendra</li>
            <li>Carry original supporting documents</li>
            <li>Provide fingerprints/iris scan if required</li>
            <li>Pay update fee: ₹50 – ₹100</li>
            <li>Receive URN slip after update</li>
          </ul>
        </section>

        <div className="my-10 border-t border-slate-200" />

        {/* -----------------------------------------------------------
            CHECK STATUS
        ----------------------------------------------------------- */}
        <section id="check-status" className="space-y-4">
          <Heading id="check-status">
            How to Check Aadhaar Update Status
          </Heading>

          <p className="text-slate-700 leading-relaxed">
            You can track your Aadhaar update using the URN on the myAadhaar
            portal.
          </p>

          <ul className="list-disc pl-5 space-y-2 text-slate-700 mt-2">
            <li>Visit myaadhaar.uidai.gov.in</li>
            <li>Select “Check Update Status”</li>
            <li>Enter URN number</li>
            <li>View processing status</li>
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
                question: "Can I update Aadhaar without mobile number?",
                answer:
                  "No. A mobile number linked to Aadhaar is required for online updates.",
              },
              {
                question: "Is address update free?",
                answer: "No. UIDAI charges ₹50 for each online update request.",
              },
              {
                question: "How long does Aadhaar update take?",
                answer:
                  "Online updates take 3–10 days. Offline biometric updates may take longer.",
              },
            ]}
          />
        </section>

        {/* FAQ Schema */}
        <FAQSchema
          faqs={[
            {
              q: "How to update Aadhaar online?",
              a: "Use the myAadhaar portal, upload documents, and submit using OTP verification.",
            },
            {
              q: "What documents are needed for Aadhaar update?",
              a: "Aadhaar, address proof, DoB proof, and identity documents depending on the update.",
            },
            {
              q: "How to check Aadhaar update status?",
              a: "Track URN on the myAadhaar portal.",
            },
          ]}
        />
      </ArticleLayout>
    </>
  );
}
