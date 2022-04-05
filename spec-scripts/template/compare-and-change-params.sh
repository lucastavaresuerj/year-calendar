# GRAPHQL_FOLDER_PATH=cfn-templates/graphQL
# S3_BUCKET_NAME=saves-bucket-calendar-year-savesbucket-nx3ap2uftsmb
# CODEBUILD_BUILD_NUMBER=1

{ # Try
	diff ./${GRAPHQL_FOLDER_PATH}/schema-*.graphql
	ERRO_CODE=$?
} && { # Catch with switch/case and exit code
	case $ERRO_CODE in
	0) { 
		echo "GraphQL schemas are equals, there is no need to update"
    echo "Deleting new schema"
    rm ./${GRAPHQL_FOLDER_PATH}/schema-${CODEBUILD_BUILD_NUMBER}.graphql
	};;
	1) { 
		echo "Need to update"
    echo "Deleting old schema"
    find ./${GRAPHQL_FOLDER_PATH}/ \
      -name "*.graphql" \
      -not -name "*${CODEBUILD_BUILD_NUMBER}.graphql" \
      -delete \
      -print
    echo "Changing parameter GraphQLSchemaFileName"
    cat cfn-templates/parameters.json | \
      fx ".map($(cat cfn-templates/mapParams.js))" \
      > cfn-templates/parameters.json
	};;
	2) { 
		echo "Diff params error, \nListing files like 'schema-*.graphql'"
    find ./${GRAPHQL_FOLDER_PATH}/ \
      -name "schema-*.graphql" \
      -print
	};;
	*) {
		echo "Something went wrong with exit code: $?"
	};;
	esac
}