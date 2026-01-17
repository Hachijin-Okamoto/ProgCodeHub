import LevelBadge from './LevelBadge';

type ProblemTitleProps = {
  title: string;
  level: number;
};

export default function ProblemTitle({ title, level }: ProblemTitleProps) {
  return (
    <div className="flex items-center gap-3">
      <h1 className="text-3xl font-bold">{title}</h1>
      <LevelBadge level={level} />
    </div>
  );
}
