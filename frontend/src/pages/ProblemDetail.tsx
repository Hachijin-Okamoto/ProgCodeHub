import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProblem } from '../api';
import { type ProblemDetailDTO } from '../dto';
import { LEVEL_BADGE_CLASS } from '../main';

function ProblemDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [problem, setProblem] = useState<ProblemDetailDTO | null>(null);
  const [showSamples, setShowSamples] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetchProblem(Number(id)).then(setProblem);
  }, [id]);

  if (!problem) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <Link to="/" className="text-blue-600 hover:underline">
        ← 一覧に戻る
      </Link>
      {/* タイトル */}
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold">{problem.title}</h1>

        <span
          className={`text-sm px-2 py-1 rounded-full font-medium ${
            LEVEL_BADGE_CLASS[problem.level] ?? 'bg-gray-100 text-gray-500'
          }`}
        >
          Lv.{problem.level}
        </span>
      </div>

      {/* 問題文 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">問題文</h2>
        <pre className="whitespace-pre-wrap leading-relaxed bg-gray-50 p-4 rounded-lg">
          {problem.body}
        </pre>
      </section>

      {/* サンプル入出力（開閉可能） */}
      {problem.samples.length > 0 && (
        <section>
          <button
            onClick={() => setShowSamples((v) => !v)}
            className="flex items-center gap-2 text-xl font-semibold mb-2"
          >
            サンプル入出力
            <span className="text-sm text-gray-500">
              {showSamples ? '▲' : '▼'}
            </span>
          </button>

          {showSamples && (
            <div className="space-y-4">
              {problem.samples.map((s, idx) => (
                <div
                  key={s.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-lg shadow"
                >
                  <div>
                    <div className="text-sm font-semibold mb-1">
                      入力 {idx + 1}
                    </div>
                    <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap">
                      {s.input || '(入力なし)'}
                    </pre>
                  </div>

                  <div>
                    <div className="text-sm font-semibold mb-1">
                      出力 {idx + 1}
                    </div>
                    <pre className="bg-gray-100 p-3 rounded whitespace-pre-wrap">
                      {s.output}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* 提出一覧 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">提出一覧</h2>

        {problem.submissions.length === 0 ? (
          <p className="text-gray-500">まだ提出がありません</p>
        ) : (
          <ul className="space-y-2">
            {problem.submissions.map((s) => (
              <li
                key={s.id}
                className="flex justify-between items-center bg-white p-3 rounded shadow"
              >
                <div>
                  <span className="font-mono text-sm">{s.language}</span>
                </div>

                <span
                  className={`text-sm font-semibold ${
                    s.result ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {s.result ? 'success' : 'failure'}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default ProblemDetailPage;
