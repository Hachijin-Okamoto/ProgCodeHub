type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: Props) {
  return (
    <button
      {...props}
      className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
    >
      {children}
    </button>
  );
}
