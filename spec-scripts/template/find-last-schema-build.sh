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
} || { # Catch
  echo "There is no file with name like 'schema-*.graphql'"
  echo "Ending script"
}