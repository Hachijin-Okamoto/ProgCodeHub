import Input from '@atoms/create/Input';
import Textarea from '@atoms/create/Textarea';
import Button from '@atoms/Button';
import LevelSelect from '@molecules/LevelSelect';

type Props = {
  title: string;
  body: string;
  level: number;
  onTitleChange: (v: string) => void;
  onBodyChange: (v: string) => void;
  onLevelChange: (v: number) => void;
  onSubmit: () => void;
};

export default function ProblemForm({
  title,
  body,
  level,
  onTitleChange,
  onBodyChange,
  onLevelChange,
  onSubmit,
}: Props) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm mb-1">問題タイトル</label>
        <Input value={title} onChange={(e) => onTitleChange(e.target.value)} />
      </div>

      <div>
        <label className="block text-sm mb-1">問題文</label>
        <Textarea
          rows={6}
          value={body}
          onChange={(e) => onBodyChange(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm mb-1">レベル</label>
        <LevelSelect value={level} onChange={onLevelChange} />
      </div>

      <Button onClick={onSubmit}>問題を作成する</Button>
    </div>
  );
}
