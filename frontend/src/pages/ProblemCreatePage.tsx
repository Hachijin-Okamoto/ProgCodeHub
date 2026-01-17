import { useState } from 'react';
import { createProblem } from '../services/rest/rest-api';
import ProblemCreateTemplate from '@templates/ProblemCreateTemplate';

export default function ProblemCreatePage() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [level, setLevel] = useState(1);

  const handleSubmit = async () => {
    await createProblem({ title, body, level });
    alert('Problem created!');
  };

  return (
    <ProblemCreateTemplate
      title={title}
      body={body}
      level={level}
      onTitleChange={setTitle}
      onBodyChange={setBody}
      onLevelChange={setLevel}
      onSubmit={handleSubmit}
    />
  );
}
