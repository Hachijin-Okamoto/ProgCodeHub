type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea(props: Props) {
  return (
    <textarea {...props} className="w-full rounded border px-3 py-2 text-sm" />
  );
}
