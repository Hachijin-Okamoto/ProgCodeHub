type ButtonProps = {
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export default function Button({
  disabled = false,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="text-sm px-3 py-1 rounded border disabled:opacity-40"
    >
      {children}
    </button>
  );
}
