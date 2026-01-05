type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
    >
      {children}
    </button>
  );
}
