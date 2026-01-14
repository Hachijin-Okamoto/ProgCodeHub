import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProblems } from '../services/api';
import { type ProblemListDTO } from '../services/dto';
import { styles } from '../styles';
import LevelDisplay from './components/LevelDisplay';

function ProblemList() {
  const [problems, setProblems] = useState<ProblemListDTO[]>([]);

  useEffect(() => {
    fetchProblems().then(setProblems);
  }, []);

  return (
    <div className={styles.defaultContainer}>
      <h1 className="text-2xl font-bold mb-4">問題一覧</h1>

      <ul className="space-y-3">
        {problems.map((p) => (
          <li key={p.id}>
            <Link
              to={`/problems/${p.id}`}
              className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{p.title}</span>

                <LevelDisplay level={p.level} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProblemList;
