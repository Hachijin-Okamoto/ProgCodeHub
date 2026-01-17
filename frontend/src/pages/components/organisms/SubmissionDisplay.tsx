import { type ProblemDetailDTO } from 'src/services/dto';
import CodeBlock from '@atoms/CodeBlock';
import IndexNavigation from '@molecules/IndexNavigation';
import { useMemo, useState } from 'react';
import SubmissionResultBadge from '@molecules/SubmissionResultBadge';
import LanguageBadge from '@molecules/LanguageBadge';
import SubmissionFilterToggleButton from '@molecules/SubmissionFilterToggleButton';

type SubmissionDisplayProps = {
  problem: ProblemDetailDTO;
};

type SubmissionFilter = 'all' | 'success' | 'failure';

export default function SubmissionDisplay({ problem }: SubmissionDisplayProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<SubmissionFilter>('all');

  const onChangeFilter = (v: SubmissionFilter) => {
    setFilter(v);
    setCurrentIndex(0);
  };

  const filteredSubmissions = useMemo(() => {
    if (!problem) return [];

    switch (filter) {
      case 'success':
        return problem.submissions.filter((s) => s.result);
      case 'failure':
        return problem.submissions.filter((s) => !s.result);
      default:
        return problem.submissions;
    }
  }, [problem, filter]);

  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">提出</h2>

      {problem.submissions.length === 0 ? (
        <p className="text-gray-500">まだ提出がありません</p>
      ) : (
        (() => {
          const s = filteredSubmissions[currentIndex];

          return (
            <div className="w-full max-w-6xl bg-white p-4 rounded-lg shadow space-y-4">
              <div className="flex gap-2 mb-3">
                <SubmissionFilterToggleButton
                  value={filter}
                  onClick={onChangeFilter}
                />
              </div>

              {/* メタ情報バー */}
              <div className="grid grid-cols-[1fr_auto] items-center">
                <LanguageBadge language={s.language} />
                <SubmissionResultBadge result={s.result} />
              </div>

              {/* 提出コード */}
              <CodeBlock code={s.body} language={s.language} />
              <IndexNavigation
                index={currentIndex}
                total={filteredSubmissions.length}
                onPrev={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                onNext={() =>
                  setCurrentIndex((i) =>
                    Math.min(filteredSubmissions.length - 1, i + 1),
                  )
                }
              />
            </div>
          );
        })()
      )}
    </section>
  );
}
