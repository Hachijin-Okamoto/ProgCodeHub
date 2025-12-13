const apiBase = 'http://localhost:8000/api';

const params = new URLSearchParams(window.location.search);
const problemId = params.get('id');

async function loadProblem() {
  const res = await fetch(`${apiBase}/problems/${problemId}`);
  const problem = await res.json();

  document.getElementById('title').textContent = problem.title;
  document.getElementById('description').textContent = problem.description;
}

async function loadSubmissions() {
  const res = await fetch(
    `${apiBase}/problems/${problemId}/submissions`,
  );
  const submissions = await res.json();

  const ul = document.getElementById('submission-list');
  ul.innerHTML = '';

  submissions.forEach((s) => {
    const li = document.createElement('li');
    li.textContent = `Submission #${s.id}`;
    ul.appendChild(li);
  });
}

loadProblem();
loadSubmissions();
