import ProblemLinks from '@organisms/ProblemLinks';
import { type ProblemListDTO } from '../../../services/dto';
import { styles } from '../../../styles';
import LinkLine from '@atoms/LinkLine';

type ProblemListTemplateProps = {
  problems: ProblemListDTO[];
};

export default function ProblemListTemplate({
  problems,
}: ProblemListTemplateProps) {
  return (
    <div className={`${styles.defaultContainer}`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold mb-4">問題一覧</h1>
        <LinkLine to="/problems/create" text="問題を作成する" />
      </div>

      <ProblemLinks problems={problems} />
    </div>
  );
}
