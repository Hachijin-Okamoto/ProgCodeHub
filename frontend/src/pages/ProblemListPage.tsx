import { useEffect, useState } from 'react';
import { fetchProblems } from '../services/api';
import { type ProblemListDTO } from '../services/dto';
import ProblemListTemplate from '@templates/ProblemListTemplate';

export default function ProblemListPage() {
  const [problems, setProblems] = useState<ProblemListDTO[]>([]);

  useEffect(() => {
    fetchProblems().then(setProblems);
  }, []);

  return <ProblemListTemplate problems={problems} />;
}
