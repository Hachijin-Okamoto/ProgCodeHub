import { Link } from 'react-router-dom';

type LinkElementProps = {
  to: string;
  children: React.ReactNode;
};

export default function LinkElement({ to, children }: LinkElementProps) {
  return (
    <Link
      to={to}
      className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition"
    >
      {children}
    </Link>
  );
}
