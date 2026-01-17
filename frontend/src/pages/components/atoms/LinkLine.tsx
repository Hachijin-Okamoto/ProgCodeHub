import { Link, useSearchParams } from 'react-router-dom';

type LinkLineProps = {
  to: string;
  text: string;
};

export default function LinkLine({ to, text }: LinkLineProps) {
  const [searchParams] = useSearchParams();
  const query = searchParams.toString();
  return (
    <Link to={`${to}?${query}`} className="text-blue-600 hover:underline">
      {text}
    </Link>
  );
}
