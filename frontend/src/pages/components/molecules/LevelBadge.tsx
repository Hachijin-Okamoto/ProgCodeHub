import Badge from '@atoms/Badge';

const levelStyleMap: Record<number, string> = {
  1: 'bg-blue-100 text-blue-700',
  2: 'bg-green-100 text-green-700',
  3: 'bg-yellow-100 text-yellow-700',
  4: 'bg-orange-100 text-orange-700',
  5: 'bg-red-100 text-red-700',
};

const defaultLevelStyle = 'bg-gray-100 text-gray-700';

type LevelBadgeProps = {
  level: number;
};

export default function LevelBadge({ level }: LevelBadgeProps) {
  const style = levelStyleMap[level] || defaultLevelStyle;

  return <Badge text={`Lv.${level}`} className={style} />;
}
