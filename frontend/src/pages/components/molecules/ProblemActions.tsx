import Button from '@atoms/create/Button';

type Props = {
  onEdit: () => void;
  onDelete: () => void;
};

export default function ProblemActions({ onEdit, onDelete }: Props) {
  return (
    <div className="flex gap-2">
      <Button onClick={onEdit}>Edit</Button>
      <Button onClick={onDelete} className="bg-red-600">
        Delete
      </Button>
    </div>
  );
}
