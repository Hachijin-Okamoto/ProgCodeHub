import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProblem } from '../services/api';
import { type ProblemDetailDTO } from '../services/dto';
import { styles } from '../styles';
import LinkLine from './components/LinkLine';
import LevelDisplay from './components/LevelDisplay';
import LanguageBadge from './components/LanguageBadge';
import SourceCodeModule from './components/SourceCodeModule';

function ProblemDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [problem, setProblem] = useState<ProblemDetailDTO | null>(null);
  const [showSamples, setShowSamples] = useState(true);

  const [currentSubmissionIndex, setCurrentSubmissionIndex] = useState(0);

  useEffect(() => {
    if (!problem) return;
    setCurrentSubmissionIndex(problem.submissions.length - 1);
  }, [problem]);

  useEffect(() => {
    if (!id) return;
    fetchProblem(Number(id)).then(setProblem);
  }, [id]);

  if (!problem) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className={styles.wideContainer}>
      <LinkLine to="/" text="← 問題一覧へ" />

      {/* タイトル */}
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold">{problem.title}</h1>
        <LevelDisplay level={problem.level} />
      </div>

      {/* 問題文 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">問題文</h2>
        <pre className="whitespace-pre-wrap leading-relaxed bg-gray-50 p-4 rounded-lg">
          {problem.body}
        </pre>
      </section>

      {/* サンプル入出力 */}
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

      {/* 提出 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">提出</h2>

        {problem.submissions.length === 0 ? (
          <p className="text-gray-500">まだ提出がありません</p>
        ) : (
          (() => {
            const s = problem.submissions[currentSubmissionIndex];

            return (
              <div className="w-full max-w-6xl bg-white p-4 rounded-lg shadow space-y-4">
                {/* メタ情報バー */}
                <div className="grid grid-cols-[1fr_auto] items-center">
                  {/* language */}
                  <LanguageBadge language={s.language} />

                  {/* result */}
                  <span
                    className={`px-3 py-1 text-sm font-semibold rounded-full ${
                      s.result
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {s.result ? 'SUCCESS' : 'FAILURE'}
                  </span>
                </div>

                {/* 提出コード */}
                <SourceCodeModule code={s.body} language={s.language} />

                {/* ナビゲーション */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={() =>
                      setCurrentSubmissionIndex((i) => Math.max(0, i - 1))
                    }
                    disabled={currentSubmissionIndex === 0}
                    className="text-sm px-3 py-1 rounded border disabled:opacity-40"
                  >
                    ← 前
                  </button>

                  <span className="text-sm text-gray-500">
                    {currentSubmissionIndex + 1} / {problem.submissions.length}
                  </span>

                  <button
                    onClick={() =>
                      setCurrentSubmissionIndex((i) =>
                        Math.min(problem.submissions.length - 1, i + 1),
                      )
                    }
                    disabled={
                      currentSubmissionIndex === problem.submissions.length - 1
                    }
                    className="text-sm px-3 py-1 rounded border disabled:opacity-40"
                  >
                    次 →
                  </button>
                </div>
              </div>
            );
          })()
        )}
      </section>
    </div>
  );
}

export default ProblemDetailPage;
