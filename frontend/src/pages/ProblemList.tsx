import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProblems, type Problem } from "../api";

function ProblemList() {
  const [problems, setProblems] = useState<Problem[]>([]);

  useEffect(() => {
    fetchProblems().then(setProblems);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">問題一覧</h1>

      <ul className="space-y-3">
        {problems.map(p => (
          <li key={p.id}>
            <Link
              to={`/problems/${p.id}`}
              className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              {p.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProblemList;
