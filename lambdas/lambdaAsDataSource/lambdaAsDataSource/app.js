exports.handler = async (event, context) => {
  console.log("event", event);
  console.log("context", context);
  return {
    result: `Well done`,
  };
};
