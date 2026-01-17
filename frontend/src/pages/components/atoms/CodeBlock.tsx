import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

function normalizeLanguage(lang: string): string {
  const l = lang.toLowerCase();

  if (l.includes('python')) return 'python';
  if (l.includes('c++') || l.includes('cpp')) return 'cpp';
  if (l.includes('c')) return 'c';
  if (l.includes('javascript')) return 'javascript';
  if (l.includes('typescript')) return 'typescript';
  if (l.includes('java')) return 'java';

  return 'text';
}

type CodeBlockProps = {
  code: string;
  language: string;
};

export default function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <div className="h-128 overflow-auto rounded-lg">
      <SyntaxHighlighter
        language={normalizeLanguage(language)}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          background: '#1e1e1e',
          fontSize: '0.875rem',
        }}
        showLineNumbers
        wrapLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
