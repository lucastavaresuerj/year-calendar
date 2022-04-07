import { API } from "aws-amplify";

export async function graphql(graphqlQuery, variables) {
  const query = await API.graphql({ query: graphqlQuery, variables });
  console.log(query);
  return query;
}
