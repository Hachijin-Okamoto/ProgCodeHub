import { useApiMode } from '../services/api';
import ProblemListTemplate from '@templates/ProblemListTemplate';
import { useProblems } from 'src/hook';
import ApiModeToggleButton from '@molecules/ApiModeToggleButton';

export default function ProblemListPage() {
  const [apiMode, setApiMode] = useApiMode();
  const { problems } = useProblems(apiMode);

  return (
    <>
      <ApiModeToggleButton value={apiMode} onClick={setApiMode} />
      <ProblemListTemplate problems={problems} />
    </>
  );
}
