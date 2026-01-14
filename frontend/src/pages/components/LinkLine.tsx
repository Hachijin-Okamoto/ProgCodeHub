import { Link } from 'react-router-dom';

function LinkLine({ to, text }: { to: string; text: string }) {
  return (
    <Link to={to} className="text-blue-600 hover:underline">
      {text}
    </Link>
  );
}

export default LinkLine;
