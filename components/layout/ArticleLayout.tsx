import Breadcrumb from "./Breadcrumb";
import TableOfContents from "./TableOfContents";

interface ArticleLayoutProps {
  title: string;
  updatedAt: string;
  breadcrumb: { name: string; href?: string }[];
  TableOfContent: { id: string; label: string }[];
  children: React.ReactNode;
}

export default function ArticleLayout({
  title,
  updatedAt,
  breadcrumb,
  TableOfContent,
  children,
}: ArticleLayoutProps) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 space-y-14">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumb} />

      {/* Title Block */}
      <header className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
          {title}
        </h1>
        <p className="text-sm text-slate-500">Updated: {updatedAt}</p>
      </header>

      {/* TOC (auto-generated) */}
      <TableOfContents items={TableOfContent} />

      {/* Actual Page Content */}
      <article className="space-y-14">{children}</article>
    </main>
  );
}
