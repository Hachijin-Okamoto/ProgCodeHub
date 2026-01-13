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

  if (!problem) return <div>Loading...</div>;

  const submissions = problem.submissions;
  const current = submissions[index];

  return (
    <div style={{ padding: 20 }}>
      <Link to="/">← 問題一覧へ</Link>

      <h1>{problem.title}</h1>
      <pre>{problem.body}</pre>

      <hr />

      <h2>提出物</h2>

      {submissions.length === 0 ? (
        <p>提出物がありません</p>
      ) : (
        <>
          <pre
            style={{
              background: "#f6f8fa",
              padding: 12,
              overflowX: "auto",
            }}
          >
            {current.body}
          </pre>

          <div style={{ marginTop: 10 }}>
            <button
              onClick={() => setIndex(i => i - 1)}
              disabled={index === 0}
            >
              前へ
            </button>

            <span style={{ margin: "0 10px" }}>
              {index + 1} / {submissions.length}
            </span>

            <button
              onClick={() => setIndex(i => i + 1)}
              disabled={index === submissions.length - 1}
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
