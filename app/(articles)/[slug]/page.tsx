import type { Metadata } from "next";
import FAQSchema from "@/components/seo/FAQSchema";

interface ArticleProps {
  params: { slug: string };
}

/* ============================
   DYNAMIC SEO METADATA BUILDER
=============================== */
export function generateMetadata({ params }: ArticleProps): Metadata {
  const titleMap: Record<string, string> = {
    "file-police-complaint-online":
      "How to File a Police Complaint Online in India (2026 Guide)",
  };

  const descMap: Record<string, string> = {
    "file-police-complaint-online":
      "A complete step-by-step guide on filing an online police complaint in India. Covers cybercrime reporting, FIR login portals, tracking complaints, and more.",
  };

  const slug = params.slug;

  return {
    title: titleMap[slug] || "Legal Guide – India",
    description:
      descMap[slug] ||
      "Read legal guides, compliance resources, and law explanations.",
    alternates: { canonical: `/articles/${slug}` },
  };
}

/* ============================
   MAIN ARTICLE TEMPLATE
=============================== */
export default function ArticlePage({ params }: ArticleProps) {
  // dynamic heading + SEO text based on slug
  const articleTitle =
    params.slug === "file-police-complaint-online"
      ? "How to File a Police Complaint Online in India (2026 Guide)"
      : "Legal Guide";

  const updatedDate = "January 2026";

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 space-y-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-500">
        <ol className="flex gap-1">
          <li>
            <a href="/" className="hover:underline text-slate-700">
              Home
            </a>
          </li>
          <li>/</li>
          <li>
            <a href="/articles" className="hover:underline text-slate-700">
              Articles
            </a>
          </li>
          <li>/</li>
          <li className="text-slate-900 font-medium">{articleTitle}</li>
        </ol>
      </nav>

      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          {articleTitle}
        </h1>
        <p className="text-sm text-slate-500">Updated: {updatedDate}</p>
      </header>

      {/* Table of Contents */}
      <section className="rounded-xl border bg-white p-6 space-y-3 shadow-sm">
        <h2 className="text-lg font-semibold">Table of Contents</h2>
        <ul className="space-y-2 text-sm text-slate-700 list-disc pl-4">
          <li>
            <a href="#intro" className="hover:text-indigo-600">
              Introduction
            </a>
          </li>
          <li>
            <a href="#steps" className="hover:text-indigo-600">
              Step-by-Step Process
            </a>
          </li>
          <li>
            <a href="#documents" className="hover:text-indigo-600">
              Required Documents
            </a>
          </li>
          <li>
            <a href="#state-portals" className="hover:text-indigo-600">
              State Portals
            </a>
          </li>
          <li>
            <a href="#tracking" className="hover:text-indigo-600">
              Tracking Your Complaint
            </a>
          </li>
          <li>
            <a href="#faqs" className="hover:text-indigo-600">
              FAQs
            </a>
          </li>
        </ul>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="prose prose-slate max-w-none">
        <h2 id="intro">Introduction</h2>
        <p className="text-slate-700">
          This is where your article introduction goes. You will replace all
          placeholder text with your real content for each article.
        </p>

        <h2 id="steps">Step-by-Step Process</h2>
        <p>Write all steps here…</p>

        <h2 id="documents">Required Documents</h2>
        <ul>
          <li>Aadhar Card</li>
          <li>Mobile Number</li>
          <li>Supporting evidence (if any)</li>
        </ul>

        <h2 id="state-portals">State Police Portals (2026)</h2>
        <p>Add state links here...</p>

        <h2 id="tracking">How to Track Your Complaint</h2>
        <p>Explain the tracking process here…</p>

        <h2 id="faqs">FAQs</h2>
      </article>

      {/* FAQ Schema */}
      <FAQSchema
        faqs={[
          {
            q: "Can I file a police complaint online in India?",
            a: "Yes, most states allow online police complaints through their official portals.",
          },
          {
            q: "Is online police complaint valid?",
            a: "Yes, online complaints are officially recorded and forwarded to the nearest police station.",
          },
        ]}
      />
    </main>
  );
}
