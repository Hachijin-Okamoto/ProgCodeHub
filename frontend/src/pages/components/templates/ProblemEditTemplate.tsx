import ProblemForm from '@organisms/ProblemForm';
import Button from '@atoms/create/Button';

type Props = {
  title: string;
  body: string;
  level: number;
  onTitleChange: (v: string) => void;
  onBodyChange: (v: string) => void;
  onLevelChange: (v: number) => void;
  onSave: () => void;
  onDelete: () => void;
};

export default function ProblemEditTemplate({
  title,
  body,
  level,
  onTitleChange,
  onBodyChange,
  onLevelChange,
  onSave,
  onDelete,
}: Props) {
  return (
    <div className="max-w-xl mx-auto mt-8 space-y-6">
      <h1 className="text-xl font-bold">Edit Problem</h1>

      <ProblemForm
        title={title}
        body={body}
        level={level}
        onTitleChange={onTitleChange}
        onBodyChange={onBodyChange}
        onLevelChange={onLevelChange}
        onSubmit={onSave}
      />

      <div className="flex justify-between">
        <Button onClick={onSave}>Save</Button>
        <Button className="bg-red-600" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}
