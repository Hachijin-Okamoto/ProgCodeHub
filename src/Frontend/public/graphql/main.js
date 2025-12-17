const GRAPHQL_ENDPOINT = 'http://localhost:8000/graphql';

async function gql(query, variables = {}) {
  const res = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  return json.data;
}

function getQueryParam(name) {
  return new URLSearchParams(location.search).get(name);
}
