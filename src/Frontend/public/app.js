const apiBase = 'http://localhost:8000/api'; // Expressのポート

async function loadProblems() {
  const res = await fetch(`${apiBase}/problems`);
  const problems = await res.json();

  const ul = document.getElementById('problem-list');
  ul.innerHTML = '';

  problems.forEach((p) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `problem.html?id=${p.id}`;
    a.textContent = p.title;
    li.appendChild(a);
    ul.appendChild(li);
  });
}

document
  .getElementById('create-form')
  .addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    await fetch(`${apiBase}/problems`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description }),
    });

    await loadProblems();
  });

loadProblems();
