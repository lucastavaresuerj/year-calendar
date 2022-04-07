import env from "./environment";

export const amplifyConfig = {
  Auth: {
    identityPoolId: env["IDENTITY_POOL_ID"], //REQUIRED - Amazon Cognito Identity Pool ID
    region: env["COGNITO_REGION"], // REQUIRED - Amazon Cognito Region
    userPoolId: env["USERPOOL_ID"], //OPTIONAL - Amazon Cognito User Pool ID
    userPoolWebClientId: env["USERPOOL_WEBCLIENT_ID"], //OPTIONAL - Amazon Cognito Web Client ID
  },
  aws_appsync_graphqlEndpoint: env["GRAPHQL_ENDPOINT"],
  aws_appsync_region: env["GRAPHQL_REGION"],
  aws_appsync_authenticationType: env["AUTHENTICATION_TYPE"],
};
