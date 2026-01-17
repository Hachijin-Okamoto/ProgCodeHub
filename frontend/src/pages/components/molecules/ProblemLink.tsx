import LinkElement from '@atoms/LinkElement';
import LevelBadge from '@molecules/LevelBadge';

type ProblemLinkProps = {
  to: string;
  title: string;
  level: number;
};

export default function ProblemLink({ to, title, level }: ProblemLinkProps) {
  return (
    <LinkElement to={to}>
      <div className="flex justify-between items-center">
        <span className="font-medium">{title}</span>
        <LevelBadge level={level} />
      </div>
    </LinkElement>
  );
}
