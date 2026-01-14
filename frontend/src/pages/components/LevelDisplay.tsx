const LEVEL_BADGE_CLASS: Record<number, string> = {
  1: 'bg-blue-100 text-blue-700',
  2: 'bg-green-100 text-green-700',
  3: 'bg-yellow-100 text-yellow-700',
  4: 'bg-orange-100 text-orange-700',
  5: 'bg-red-100 text-red-700',
};

function LevelDisplay({ level }: { level: number }) {
  return (
    <span
      className={`text-xs px-2 py-1 rounded-full font-medium ${
        LEVEL_BADGE_CLASS[level] ?? 'bg-gray-100 text-gray-500'
      }`}
    >
      Lv.{level}
    </span>
  );
}

export default LevelDisplay;
