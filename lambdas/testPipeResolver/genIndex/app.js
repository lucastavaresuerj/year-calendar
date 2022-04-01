exports.handler = async (event) => {
  const {
    appSyncContext: {
      identity: { username },
      arguments,
    },
  } = event;
  const {
    input: { name },
  } = arguments;

  const random = (Math.random() * 1000000).toFixed(0);

  return {
    ...arguments["input"],
    index: `${username}-${name}-${random}`,
  };
};
