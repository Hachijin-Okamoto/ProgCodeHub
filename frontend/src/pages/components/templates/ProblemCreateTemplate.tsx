import ProblemForm from '@organisms/ProblemForm';
import LinkLine from '@atoms/LinkLine';

type Props = {
  title: string;
  body: string;
  level: number;
  onTitleChange: (v: string) => void;
  onBodyChange: (v: string) => void;
  onLevelChange: (v: number) => void;
  onSubmit: () => void;
};

export default function ProblemCreateTemplate(props: Props) {
  return (
    <div className="max-w-xl mx-auto mt-8">
      <h1 className="text-xl font-bold mb-6">問題作成ページ</h1>
      <ProblemForm {...props} />
      <LinkLine to="/" text="問題一覧に戻る" />
    </div>
  );
}
