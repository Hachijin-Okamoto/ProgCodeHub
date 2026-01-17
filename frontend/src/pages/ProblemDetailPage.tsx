import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProblem } from '../services/api';
import { type ProblemDetailDTO } from '../services/dto';
import ProblemDetailTemplate from '@templates/ProblemDetailTemplate';

function ProblemDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [problem, setProblem] = useState<ProblemDetailDTO | null>(null);

  useEffect(() => {
    if (!id) return;
    fetchProblem(Number(id)).then(setProblem);
  }, [id]);

  if (!problem) {
    return <div className="p-6">Loading...</div>;
  }

  return <ProblemDetailTemplate problem={problem} />;
}

export default ProblemDetailPage;
