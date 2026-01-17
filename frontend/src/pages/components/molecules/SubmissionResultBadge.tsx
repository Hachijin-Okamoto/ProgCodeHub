import Badge from '@atoms/Badge';

const resultStyleMap: Record<string, string> = {
  SUCCESS: 'bg-green-100 text-green-700',
  FAILURE: 'bg-red-100 text-red-700',
};

type SubmissionResultBadgeProps = {
  result: boolean;
};

export default function SubmissionResultBadge({
  result,
}: SubmissionResultBadgeProps) {
  const resultStyle = resultStyleMap[result ? 'SUCCESS' : 'FAILURE'];
  return (
    <Badge text={result ? 'SUCCESS' : 'FAILURE'} className={resultStyle} />
  );
}
