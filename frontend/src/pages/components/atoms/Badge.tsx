type BadgeProps = {
  text: string;
  className?: string;
};

export default function Badge({ text, className }: BadgeProps) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold ${className}`}
    >
      {text}
    </span>
  );
}
