import { Link } from 'react-router-dom';

type LinkLineProps = {
  to: string;
  text: string;
};

export default function LinkLine({ to, text }: LinkLineProps) {
  return (
    <Link to={to} className="text-blue-600 hover:underline">
      {text}
    </Link>
  );
}
