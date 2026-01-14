import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProblems } from '../api';
import { type ProblemListDTO } from '../dto';
import { LEVEL_BADGE_CLASS } from '../main';

function ProblemList() {
  const [problems, setProblems] = useState<ProblemListDTO[]>([]);

  useEffect(() => {
    fetchProblems().then(setProblems);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
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

                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    LEVEL_BADGE_CLASS[p.level] ?? 'bg-gray-100 text-gray-500'
                  }`}
                >
                  Lv.{p.level}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProblemList;
