# GRAPHQL_FOLDER_PATH=cfn-templates/graphQL
# CODEBUILD_BUILD_NUMBER=43
# S3_BUCKET_NAME=saves-bucket-calendar-year-savesbucket-nx3ap2uftsmb

echo "Merging graphql files"
{ # Try
  graphql-schema-utilities \
    -s "./${GRAPHQL_FOLDER_PATH}/schema-definition/**/*.graphql" \
    -o "./${GRAPHQL_FOLDER_PATH}/schema-${CODEBUILD_BUILD_NUMBER}.graphql"
  rm ./${GRAPHQL_FOLDER_PATH}/schema-definition -r
} || { # Catch
  echo "Cloud not merge files, exiting script"
  exit 1
} || exit

echo "Linting \"schema-${CODEBUILD_BUILD_NUMBER}.graphql\""
{ # Try
  graphql-schema-linter \
    --rules \
      defined-types-are-used \
    "./${GRAPHQL_FOLDER_PATH}/schema-${CODEBUILD_BUILD_NUMBER}.graphql"
} || { # Catch
  echo "The linter find some errors, exiting script"
  exit 1
} || exit