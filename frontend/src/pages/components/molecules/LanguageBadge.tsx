import Badge from '@atoms/Badges';

const languageStyleMap: Record<string, string> = {
  c: 'bg-blue-100 text-blue-700',
  cpp: 'bg-indigo-100 text-indigo-700',
  python: 'bg-yellow-100 text-yellow-800',
  ruby: 'bg-red-100 text-red-700',
  javascript: 'bg-yellow-200 text-yellow-900',
  typescript: 'bg-blue-200 text-blue-900',
};

const defaultLanguageStyle = 'bg-gray-100 text-gray-700';

type LanguageBadgeProps = {
  language: string;
};

export default function LanguageBadge({ language }: LanguageBadgeProps) {
  const style =
    languageStyleMap[language.toLowerCase()] || defaultLanguageStyle;

  return (
    <div className="flex">
      Language:
      <Badge text={language} className={style} />
    </div>
  );
}
