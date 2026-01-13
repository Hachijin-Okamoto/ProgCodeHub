import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProblems, type Problem } from "../api";

function ProblemList() {
  const [problems, setProblems] = useState<Problem[]>([]);

  useEffect(() => {
    fetchProblems().then(setProblems);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>問題一覧</h1>
      <ul>
        {problems.map(p => (
          <li key={p.id}>
            <Link to={`/problems/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProblemList;
