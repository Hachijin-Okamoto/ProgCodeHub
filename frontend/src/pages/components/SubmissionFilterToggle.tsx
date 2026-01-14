type SubmissionFilter = 'all' | 'success' | 'failure';

type Props = {
  value: SubmissionFilter;
  onChange: (v: SubmissionFilter) => void;
};

export default function SubmissionFilterToggle({ value, onChange }: Props) {
  const base = 'px-4 py-1.5 text-sm font-medium transition-colors';
  const active = 'bg-white shadow text-gray-900';
  const inactive = 'text-gray-500 hover:text-gray-700';

  return (
    <div className="inline-flex rounded-full bg-gray-100 p-1">
      <button
        onClick={() => onChange('all')}
        className={`${base} rounded-full ${
          value === 'all' ? active : inactive
        }`}
      >
        All
      </button>

      <button
        onClick={() => onChange('success')}
        className={`${base} rounded-full ${
          value === 'success' ? active : inactive
        }`}
      >
        Success
      </button>

      <button
        onClick={() => onChange('failure')}
        className={`${base} rounded-full ${
          value === 'failure' ? active : inactive
        }`}
      >
        Failure
      </button>
    </div>
  );
}
