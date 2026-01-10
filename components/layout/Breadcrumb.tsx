interface Crumb {
  name: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className="text-sm text-slate-500" aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 flex-wrap">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {item.href ? (
              <a href={item.href} className="hover:underline text-slate-700">
                {item.name}
              </a>
            ) : (
              <span className="text-slate-900 font-semibold">{item.name}</span>
            )}
            {index < items.length - 1 && <span>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
