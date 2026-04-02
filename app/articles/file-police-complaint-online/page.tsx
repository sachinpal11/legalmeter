import type { Metadata } from "next";
import FAQSchema from "@/components/seo/FAQSchema";
import FAQSection from "@/components/ui/Faq";
import ArticleSchema from "@/components/seo/ArticleSchema";
import ArticleLayout from "@/components/layout/ArticleLayout";
import Heading from "@/components/layout/Heading";

/* INLINE SVG ICONS — ZERO JS */
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
  title: "Online Police Complaint Kaise Kare — Step-by-Step Guide (All States 2026)",
  description:
    "Ghar baithe online police complaint kaise kare — sabhi states ke liye step-by-step guide 2026. Cybercrime, fraud, harassment report kare. FIR copy bhi download kare.",
  keywords: [
    "online police complaint kaise kare",
    "online complaint kaise kare police mein",
    "file police complaint online India",
    "ऑनलाइन पोलीस तक्रार कशी करावी",
    "cybercrime complaint India",
    "police portal India",
    "FIR online India",
    "தமிழ்நாடு போலீஸ் ஆன்லைன் புகார்",
    "ಪೊಲೀಸ್ ಠಾಣೆಗೆ ಅರ್ಜಿ",
    "online police complaint kaise kare",
  ],
  alternates: {
    canonical: "https://legalmeter.in/articles/file-police-complaint-online",
  },
  openGraph: {
    title: "Online Police Complaint Kaise Kare — Step-by-Step Guide (All States 2026)",
    description:
      "Ghar baithe online police complaint kare — Cybercrime, theft, fraud. State-wise direct links. FIR copy download kare. Free 2026 guide.",
    url: "https://legalmeter.in/articles/file-police-complaint-online",
    siteName: "LegalMeter India",
    locale: "en_IN",
    type: "article",
    images: [
      {
        url: "https://legalmeter.in/og/police-complaint-guide.jpg",
        width: 1200,
        height: 630,
        alt: "Online Police Complaint Kaise Kare — 2026 Guide",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <ArticleSchema
        title="How to File a Police Complaint Online in India (2026 Guide)"
        description="Step-by-step guide for filing a police complaint online."
        date="2026-01-01"
        url="https://legalmeter.in/articles/file-police-complaint-online"
      />

      <ArticleLayout
        title="How to File a Police Complaint Online in India (2026 Guide)"
        updatedAt="January 2026"
        breadcrumb={[
          { name: "Home", href: "/" },
          { name: "Articles", href: "/articles" },
          { name: "Police Complaint Online" },
        ]}
        TableOfContent={[
          { id: "intro", label: "Introduction" },
          { id: "steps", label: "How to File a Police Complaint Online" },
          { id: "documents", label: "Documents Required" },
          { id: "portals", label: "State Police Portals" },
          { id: "cybercrime", label: "Cybercrime Complaint" },
          { id: "tracking", label: "Tracking Your Complaint" },
          { id: "faqs", label: "FAQs" },
        ]}
      >
        {/* INTRO */}
        <section id="intro">
          <Heading id="intro">Introduction</Heading>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Filing a police complaint in India has become simple due to the
            availability of state-level online police portals. Citizens can
            report crimes, upload evidence, and track complaint updates without
            visiting a police station.
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed">
            Online filing is ideal for cybercrime, fraud, financial scams,
            harassment, lost items, and civil disputes.
          </p>
        </section>

        {/* STEPS */}
        <section id="steps">
          <Heading id="steps">How to File a Police Complaint Online</Heading>

          <div className="mt-6 space-y-5">
            {[
              [
                "Step 1 — Visit Your State Police Portal",
                "Each state has its own online citizen portal linked to police stations.",
              ],
              [
                "Step 2 — Select “Online Services” or “Report Complaint”",
                "Options include e-FIR, Lost Report, or Public Grievances.",
              ],
              [
                "Step 3 — Fill the Complaint Form",
                "Enter name, contact details, incident information, and a clear description.",
              ],
              [
                "Step 4 — Upload Evidence",
                "Attach screenshots, photos, receipts, chats, or any proof.",
              ],
              [
                "Step 5 — Submit & Save Acknowledgment",
                "You will receive a Complaint ID via SMS/email.",
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

        {/* DOCUMENTS */}
        <section id="documents">
          <Heading id="documents">Documents Required</Heading>

          <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-slate-700 text-sm">
            {[
              "Aadhaar or ID proof",
              "Active mobile number (OTP)",
              "Screenshots or evidence",
              "Address proof (optional)",
              "Written statement (optional)",
            ].map((item, i) => (
              <li key={i} className="flex gap-2 items-center min-h-[24px]">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* PORTALS */}
        <section id="portals">
          <Heading id="portals">Official State Police Portals (2026)</Heading>

          <div className="grid sm:grid-cols-2 gap-3 mt-5">
            {[
              ["Delhi Police", "https://delhipolice.gov.in"],
              ["Maharashtra Police", "https://mahapolice.gov.in"],
              ["Uttar Pradesh Police", "https://uppolice.gov.in"],
              ["Karnataka Police", "https://ksp.karnataka.gov.in"],
              ["Tamil Nadu Police", "https://tnpolice.gov.in"],
              ["West Bengal Police", "https://wbpolice.gov.in"],
              ["Kerala Police", "https://keralapolice.gov.in"],
              ["Punjab Police", "https://punjabpolice.gov.in"],
            ].map(([name, link], i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border rounded-lg bg-white flex items-center justify-between hover:bg-slate-50 transition min-h-[50px]"
              >
                <span>{name}</span>
                <LinkIcon />
              </a>
            ))}
          </div>

          <p className="mt-3 text-sm text-slate-500">
            For other states, search:
            <strong> “&lt;state name&gt; police online complaint”</strong>
          </p>
        </section>

        {/* CYBERCRIME */}
        <section id="cybercrime">
          <Heading id="cybercrime">How to File a Cybercrime Complaint</Heading>

          <p className="mt-3">
            <strong>National Cybercrime Portal:</strong>{" "}
            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline"
            >
              cybercrime.gov.in
            </a>
          </p>

          <ol className="mt-4 space-y-2 text-slate-700">
            <li>Visit the official portal.</li>
            <li>Select “File a Complaint”.</li>
            <li>Choose category (Women/Child or Other).</li>
            <li>Verify mobile via OTP.</li>
            <li>Fill accurate details.</li>
            <li>Upload evidence.</li>
            <li>Save acknowledgment number.</li>
          </ol>
        </section>

        {/* TRACKING */}
        <section id="tracking">
          <Heading id="tracking">How to Track Your Complaint Online</Heading>

          <p className="mt-3 text-slate-700">
            Use your Complaint ID on the state portal under “Track Complaint”.
          </p>

          <ul className="mt-2 text-slate-700">
            <li>• Pending</li>
            <li>• Under Inquiry</li>
            <li>• Action Taken</li>
            <li>• Closed</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faqs">
          <FAQSection
            faqs={[
              {
                question: "Is an online police complaint valid?",
                answer:
                  "Yes. It is forwarded to the concerned police station for necessary action.",
              },
              {
                question: "Can I file an FIR online?",
                answer:
                  "Most states allow FIR only for limited non-serious offences. Online complaints are converted to FIR after verification.",
              },
              {
                question: "Is filing online complaint free?",
                answer: "Yes, it is completely free.",
              },
            ]}
          />
        </section>

        {/* FAQ SCHEMA */}
        <FAQSchema
          faqs={[
            { q: "Can I file a police complaint online?", a: "Yes." },
            { q: "Is online complaint valid?", a: "Yes." },
            {
              q: "How to file cybercrime complaint?",
              a: "Visit cybercrime.gov.in.",
            },
          ]}
        />
      </ArticleLayout>
    </>
  );
}
