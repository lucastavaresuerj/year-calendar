# GRAPHQL_FOLDER_PATH=cfn-templates/graphQL
# S3_BUCKET_NAME=saves-bucket-calendar-year-savesbucket-nx3ap2uftsmb
# CODEBUILD_BUILD_NUMBER=1

aws s3 sync \
  s3://${S3_BUCKET_NAME}/${GRAPHQL_FOLDER_PATH}/ \
  ./${GRAPHQL_FOLDER_PATH}/ \
  --exclude "*" \
  --include "schema-*.graphql"

{ # Try
  diff ./${GRAPHQL_FOLDER_PATH}/schema-*.graphql
  echo "GraphQL schemas are equals, there is no need to update"
  rm ./${GRAPHQL_FOLDER_PATH}/schema-${CODEBUILD_BUILD_NUMBER}.graphql
} || { # Catch
  echo "Need to update"
  echo "Changing parameter GraphQLSchemaFileName"
  cat cfn-templates/parameters.json | \
    fx ".map($(cat cfn-templates/mapParams.js))" \
    > cfn-templates/parameters.json
}