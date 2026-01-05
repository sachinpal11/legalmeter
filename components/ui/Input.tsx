type Props = {
  label: string;
  value: string | number;
  onChange: (v: string) => void;
  type?: string;
};

export default function Input({
  label,
  value,
  onChange,
  type = "text",
}: Props) {
  return (
    <label className="block text-sm mb-2">
      {label}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border p-2 rounded"
      />
    </label>
  );
}
