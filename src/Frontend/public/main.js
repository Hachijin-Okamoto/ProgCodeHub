const API_BASE = 'http://localhost:8000/api';

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}
