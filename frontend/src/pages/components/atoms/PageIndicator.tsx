type PageIndicatorProps = {
  current: number;
  total: number;
};

export default function PageIndicator({ current, total }: PageIndicatorProps) {
  return (
    <span className="text-sm text-gray-500">
      {current} / {total}
    </span>
  );
}
