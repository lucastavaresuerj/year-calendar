/* prettier-ignore */
(param) => {
  if (param.ParameterKey === "GraphQLSchemaFileName") {
    return {
      ParameterKey: "GraphQLSchemaFileName",
      ParameterValue: `schema.graphql-${process.env["CODEBUILD_BUILD_NUMBER"]}`,
    };
  }
  return param;  
} /* do not use ";" at the end of this function */
