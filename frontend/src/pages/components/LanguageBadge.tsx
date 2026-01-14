const languageStyleMap: Record<string, string> = {
  c: 'bg-blue-100 text-blue-700',
  cpp: 'bg-indigo-100 text-indigo-700',
  python: 'bg-yellow-100 text-yellow-800',
  ruby: 'bg-red-100 text-red-700',
  javascript: 'bg-yellow-200 text-yellow-900',
  typescript: 'bg-blue-200 text-blue-900',
};

const defaultLanguageStyle = 'bg-gray-100 text-gray-700';

function LanguageBadge({ language }: { language: string }) {
  return (
    <div>
      Language:
      <span
        className={`
    px-3 py-1 rounded-full
    text-sm font-semibold
    ${languageStyleMap[language.toLowerCase()] ?? defaultLanguageStyle}
  `}
      >
        {language}
      </span>
    </div>
  );
}

export default LanguageBadge;
