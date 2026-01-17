import ProblemLink from '@molecules/ProblemLink';
import { type ProblemListDTO } from '../../../services/dto';

type ProblemLinksProps = {
  problems: ProblemListDTO[];
};

export default function ProblemLinks({ problems }: ProblemLinksProps) {
  return (
    <ul className="space-y-3">
      {problems.map((problem) => (
        <li key={problem.id}>
          <ProblemLink
            to={`/problems/${problem.id}`}
            title={problem.title}
            level={problem.level}
          ></ProblemLink>
        </li>
      ))}
    </ul>
  );
}
