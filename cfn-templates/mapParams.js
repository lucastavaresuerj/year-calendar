/* prettier-ignore */
(param) => {
  if (param.ParameterKey === "GraphQLSchemaFileName") {
    return {
      ParameterKey: "GraphQLSchemaFileName",
      ParameterValue: `schema-${process.env["CODEBUILD_BUILD_NUMBER"]}.graphql`,
    };
  }
  return param;  
} /* do not use ";" at the end of this function */
