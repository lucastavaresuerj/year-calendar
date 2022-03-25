# GRAPHQL_FOLDER_PATH=cfn-templates/graphQL
# CODEBUILD_BUILD_NUMBER=1
# S3_BUCKET_NAME=saves-bucket-calendar-year-savesbucket-nx3ap2uftsmb

echo "merging graphql files"
graphql-schema-utilities \
  -s "./${GRAPHQL_FOLDER_PATH}/schema-definition/**/*.graphql" \
  -o "./${GRAPHQL_FOLDER_PATH}/schema-${CODEBUILD_BUILD_NUMBER}.graphql"
rm ./${GRAPHQL_FOLDER_PATH}/schema-definition -r