import ProblemTitle from '@molecules/ProblemTitle';
import { styles } from '../../../styles';
import LinkLine from '@atoms/LinkLine';
import { type ProblemDetailDTO } from '../../../services/dto';
import SubmissionDisplay from '@organisms/SubmissionDisplay';
import TextDisplay from '@molecules/TextDisplay';
import SampleDisplay from '@organisms/SampleDisplay';

type ProblemDetailTemplateProps = {
  problem: ProblemDetailDTO;
};

export default function ProblemDetailTemplate({
  problem,
}: ProblemDetailTemplateProps) {
  return (
    <div className={`${styles.wideContainer}`}>
      <LinkLine to="/" text="← 問題一覧へ" />
      <ProblemTitle title={problem.title} level={problem.level} />
      <TextDisplay title="問題文" body={problem.body} />
      <LinkLine
        to={`/problems/${problem.id}/edit`}
        text="問題を編集/削除する"
      />
      <SampleDisplay samples={problem.samples} />
      <SubmissionDisplay problem={problem} />
    </div>
  );
}
