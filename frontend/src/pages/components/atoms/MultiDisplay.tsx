type MultiDisplayProps = {
  children: React.ReactNode;
};

export default function MultiDisplay({ children }: MultiDisplayProps) {
  return (
    <div className="inline-flex rounded-full bg-gray-100 p-2">{children}</div>
  );
}
