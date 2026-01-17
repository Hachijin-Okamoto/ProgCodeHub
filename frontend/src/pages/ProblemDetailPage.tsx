import { useParams } from 'react-router-dom';
import { useProblem } from '../hook';
import ProblemDetailTemplate from '@templates/ProblemDetailTemplate';
import { useApiMode } from 'src/services/api';
import ApiModeToggleButton from '@molecules/ApiModeToggleButton';

function ProblemDetailPage() {
  const [apiMode, setApiMode] = useApiMode();
  const { id } = useParams<{ id: string }>();
  const { problem } = useProblem(apiMode, Number(id));

  if (!problem) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <>
      <ApiModeToggleButton value={apiMode} onClick={setApiMode} />
      <ProblemDetailTemplate problem={problem} />
    </>
  );
}

export default ProblemDetailPage;
