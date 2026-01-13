import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProblem, type ProblemDetail as ProblemType } from "../api";

function ProblemDetail() {
  const { id } = useParams<{ id: string }>();
  const [problem, setProblem] = useState<ProblemType | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!id) return;
    fetchProblem(Number(id)).then(p => {
      setProblem(p);
      setIndex(0);
    });
  }, [id]);

  if (!problem) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        Loading...
      </div>
    );
  }

  const submissions = problem.submissions;
  const current = submissions[index];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 問題一覧へ
      </Link>

      <h1 className="text-2xl font-bold">{problem.title}</h1>

      <pre className="bg-gray-100 p-4 rounded-lg whitespace-pre-wrap">
        {problem.body}
      </pre>

      <hr />

      <h2 className="text-xl font-semibold">提出物</h2>

      {submissions.length === 0 ? (
        <p className="text-gray-500">提出物がありません</p>
      ) : (
        <>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto font-mono">
            {current.body}
          </pre>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIndex(i => i - 1)}
              disabled={index === 0}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              前へ
            </button>

            <span className="text-sm text-gray-600">
              {index + 1} / {submissions.length}
            </span>

            <button
              onClick={() => setIndex(i => i + 1)}
              disabled={index === submissions.length - 1}
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
            >
              次へ
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ProblemDetail;
