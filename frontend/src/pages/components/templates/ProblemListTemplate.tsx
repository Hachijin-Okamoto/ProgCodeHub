import ProblemLinks from '@organisms/ProblemLinks';
import { type ProblemListDTO } from '../../../services/dto';
import { styles } from '../../../styles';

type ProblemListTemplateProps = {
  problems: ProblemListDTO[];
};

export default function ProblemListTemplate({
  problems,
}: ProblemListTemplateProps) {
  return (
    <div className={`${styles.defaultContainer}`}>
      <h1 className="text-2xl font-bold mb-4">問題一覧</h1>

      <ProblemLinks problems={problems} />
    </div>
  );
}
