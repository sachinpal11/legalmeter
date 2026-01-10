export default function Heading({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <h2 id={id} className="scroll-mt-24 text-xl font-semibold text-slate-900">
      {children}
    </h2>
  );
}
