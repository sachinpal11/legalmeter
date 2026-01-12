import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import Heading from "@/components/layout/Heading";
import { articlesData } from "./ArticleData";

/* Reusable Article Card */
function ArticleCard({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition block"
    >
      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-700 transition">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>

      <span className="mt-3 inline-block text-indigo-600 text-sm font-medium group-hover:underline">
        Read more →
      </span>
    </a>
  );
}

export const metadata: Metadata = {
  title: "Legal Articles & Guides (2026) | LegalMeter India",
  description:
    "Browse LegalMeter's 2026 library of legal guides: police complaints, FIR, legal notices, Aadhaar updates, PAN, Passport, trending laws, and government document updates.",
  alternates: {
    canonical: "https://legalmeter.in/articles",
  },
};

export default function Page() {
  return (
    <ArticleLayout
      title="Legal Articles & Guides (2026)"
      updatedAt="January 2026"
      breadcrumb={[{ name: "Home", href: "/" }, { name: "Articles" }]}
      TableOfContent={[
        { id: "intro", label: "Introduction" },
        { id: "apply", label: "How to Apply (Documents)" },
        { id: "legal", label: "Legal Help Guides" },
        { id: "identity", label: "Identity Updates" },
        { id: "trending", label: "Trending Topics" },
        { id: "updates", label: "2026 Updates" },
      ]}
    >
      {/* INTRO */}
      <section id="intro">
        <Heading id="intro">Introduction</Heading>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Explore simplified legal and documentation guides for Indian citizens.
          These articles include step-by-step instructions, official links,
          documents required, and state-wise procedures—written in clean,
          beginner-friendly language.
        </p>
      </section>

      <div className="my-10 border-t" />

      {/* APPLY */}
      <section id="apply">
        <Heading id="apply">How to Apply (Government Documents)</Heading>

        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {articlesData
            .filter((a) => a.category === "apply")
            .map((item, i) => (
              <ArticleCard key={i} {...item} />
            ))}
        </div>
      </section>

      <div className="my-10 border-t" />

      {/* LEGAL HELP */}
      <section id="legal">
        <Heading id="legal">Legal Help Guides</Heading>

        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {articlesData
            .filter((a) => a.category === "legal")
            .map((item, i) => (
              <ArticleCard key={i} {...item} />
            ))}
        </div>
      </section>

      <div className="my-10 border-t" />

      {/* IDENTITY UPDATES */}
      <section id="identity">
        <Heading id="identity">Identity Document Updates</Heading>

        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {articlesData
            .filter((a) => a.category === "identity")
            .map((item, i) => (
              <ArticleCard key={i} {...item} />
            ))}
        </div>
      </section>

      <div className="my-10 border-t" />

      {/* TRENDING */}
      <section id="trending">
        <Heading id="trending">Trending Legal Topics</Heading>

        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {articlesData
            .filter((a) => a.category === "trending")
            .map((item, i) => (
              <ArticleCard key={i} {...item} />
            ))}
        </div>
      </section>

      <div className="my-10 border-t" />

      {/* 2026 UPDATES */}
      <section id="updates">
        <Heading id="updates">Latest 2026 Government Document Updates</Heading>

        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {articlesData
            .filter((a) => a.category === "updates")
            .map((item, i) => (
              <ArticleCard key={i} {...item} />
            ))}
        </div>
      </section>
    </ArticleLayout>
  );
}
