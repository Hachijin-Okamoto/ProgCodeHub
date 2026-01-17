import ProblemLink from '@molecules/ProblemLink';
import { type ProblemListDTO } from '../../../services/dto';
import { useSearchParams } from 'react-router-dom';

type ProblemLinksProps = {
  problems: ProblemListDTO[];
};

export default function ProblemLinks({ problems }: ProblemLinksProps) {
  const [searchParams] = useSearchParams();
  const query = searchParams.toString();

  return (
    <ul className="space-y-3">
      {problems.map((problem) => (
        <li key={problem.id}>
          <ProblemLink
            to={`/problems/${problem.id}?${query}`}
            title={problem.title}
            level={problem.level}
          ></ProblemLink>
        </li>
      ))}
    </ul>
  );
}
