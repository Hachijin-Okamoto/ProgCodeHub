type TextDisplayProps = {
  title: string;
  body: string;
};

export default function TextDisplay({ title, body }: TextDisplayProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <pre className="whitespace-pre-wrap leading-relaxed bg-gray-50 p-4 rounded-lg">
        {body}
      </pre>
    </section>
  );
}
