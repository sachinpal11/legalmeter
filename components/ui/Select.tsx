type Props = {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
};

export default function Select({ label, options, value, onChange }: Props) {
  return (
    <label className="block text-sm mb-2">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border p-2 rounded"
      >
        <option value="">Select</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
