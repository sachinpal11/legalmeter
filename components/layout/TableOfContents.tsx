/* SERVER COMPONENT – ZERO JS, ZERO HYDRATION */

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

interface TOCItem {
  id: string;
  label: string;
}

export default function TableOfContents({ items }: { items: TOCItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <section
      className="rounded-xl border bg-white p-6"
      aria-label="Table of Contents"
    >
      <h2 className="text-lg font-semibold text-slate-900 mb-4">
        Table of Contents
      </h2>

      <nav className="grid sm:grid-cols-2 gap-y-2 text-sm">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="text-slate-700 hover:text-indigo-600 flex items-center gap-2 min-h-[28px]"
          >
            <CheckIcon />
            {item.label}
          </a>
        ))}
      </nav>
    </section>
  );
}
