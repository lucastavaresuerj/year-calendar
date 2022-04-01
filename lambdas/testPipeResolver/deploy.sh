npm install --prefix ./${FOLDER_NAME}
sam deploy \
  --stack-name "${STACK_NAME}-${FOLDER_NAME}" \
  --s3-bucket ${S3_BUCKET_DEPLOY} \
  --s3-prefix "lambdas/${FOLDER_NAME}" \
  --parameter-overrides \
      GraphqlApiId=${GRAPHQL_API_ID} \
      DynamoDbTableName=${DYNAMODB_NAME} \
      DynamoDbRegion=${DYNAMODB_REGION} \
  --capabilities CAPABILITY_IAM