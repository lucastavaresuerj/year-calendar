# GRAPHQL_FOLDER_PATH=cfn-templates/graphQL
# S3_BUCKET_NAME=saves-bucket-calendar-year-savesbucket-nx3ap2uftsmb
# CODEBUILD_BUILD_NUMBER=1

{ # Try
  aws s3 sync \
    s3://${S3_BUCKET_NAME}/${GRAPHQL_FOLDER_PATH}/ \
    ./${GRAPHQL_FOLDER_PATH}/ \
    --exclude "*" \
    --exclude "*/" \
    --include "schema-*.graphql" | \
    grep "download"
} || { #Catch
  echo "There is no file with name like 'schema-*.graphql'"
  echo "Ending script"
  exit 1
}

{ # Try
  diff ./${GRAPHQL_FOLDER_PATH}/schema-*.graphql
} && { # Do if has no error at try
  echo "GraphQL schemas are equals, there is no need to update"
  rm ./${GRAPHQL_FOLDER_PATH}/schema-${CODEBUILD_BUILD_NUMBER}.graphql
} || { # Catch
  echo "Need to update"
  aws s3 rm \
    s3://saves-bucket-calendar-year-savesbucket-nx3ap2uftsmb/cfn-templates/graphQL/ \
    --exclude "*" \
    --include "schema-*.graphql" \
    --recursive
  echo "Changing parameter GraphQLSchemaFileName"
  cat cfn-templates/parameters.json | \
    fx ".map($(cat cfn-templates/mapParams.js))" \
    > cfn-templates/parameters.json
}