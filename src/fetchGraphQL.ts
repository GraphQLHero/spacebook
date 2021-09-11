const GRAPHQL_ENDPOINT =
  'https://graphqlhero.com/api/demos/schema-and-type-system/end';

async function fetchGraphQL<Response>(
  query: string,
  variables: Object = {},
  operationName: string | null = null
): Promise<{ data: Response }> {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
      operationName,
    }),
  });

  // Get the response as JSON
  const json = await response.json();

  if (!json.data) {
    throw new Error('GraphQL request failed.');
  }

  return json;
}

export default fetchGraphQL;
