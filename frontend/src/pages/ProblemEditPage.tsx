import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  fetchProblem,
  updateProblem,
  deleteProblem,
} from '../services/rest/rest-api';
import ProblemEditTemplate from '@templates/ProblemEditTemplate';

export default function ProblemEditPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [level, setLevel] = useState(1);

  useEffect(() => {
    if (!id) return;
    fetchProblem(Number(id)).then((p) => {
      setTitle(p.title);
      setBody(p.body);
      setLevel(p.level);
    });
  }, [id]);

  const handleSave = async () => {
    if (!id) return;
    await updateProblem(Number(id), { title, body, level });
    navigate(`/problems/${Number(id)}`);
  };

  const handleDelete = async () => {
    if (!id) return;
    if (!confirm('本当に削除しますか？')) return;
    await deleteProblem(Number(id));
    navigate('/');
  };

  return (
    <ProblemEditTemplate
      title={title}
      body={body}
      level={level}
      onTitleChange={setTitle}
      onBodyChange={setBody}
      onLevelChange={setLevel}
      onSave={handleSave}
      onDelete={handleDelete}
    />
  );
}
