const API_BASE = 'http://localhost:8000/api';

const output = document.getElementById('output');

const show = (data) => {
  output.textContent = JSON.stringify(data, null, 2);
};

const request = async (url, options = {}) => {
  try {
    const res = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });
    const text = await res.text();
    show({
      status: res.status,
      body: text ? JSON.parse(text) : null,
    });
  } catch (e) {
    show({ error: e.message });
  }
};

// Problems
const getAllProblems = () => request(`${API_BASE}/problems`);

const createProblem = () =>
  request(`${API_BASE}/problems`, {
    method: 'POST',
    body: JSON.stringify({
      title: problemTitle.value,
      description: problemDesc.value,
    }),
  });

const getProblem = () => request(`${API_BASE}/problems/${problemId.value}`);

const editProblem = () =>
  request(`${API_BASE}/problems/${problemId.value}`, {
    method: 'PUT',
    body: JSON.stringify({
      title: problemTitle.value,
      description: problemDesc.value,
    }),
  });

const deleteProblem = () =>
  request(`${API_BASE}/problems/${problemId.value}`, {
    method: 'DELETE',
  });

const getProblemSubmissions = () =>
  request(`${API_BASE}/problems/${problemId.value}/submissions`);

// Submissions
const getAllSubmissions = () => request(`${API_BASE}/submissions`);

const createSubmission = () =>
  request(`${API_BASE}/submissions`, {
    method: 'POST',
    body: JSON.stringify({
      problemId: Number(submissionProblemId.value),
      userName: submissionUser.value,
      code: submissionCode.value,
    }),
  });

const getSubmission = () =>
  request(`${API_BASE}/submissions/${submissionId.value}`);
