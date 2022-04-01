exports.handler = async (event) => {
  const {
    appSyncContext: {
      identity: { username },
      arguments: {
        input: { name },
      },
      arguments,
    },
  } = event;
  const random = (Math.random() * 1000000).toFixed(0);

  return {
    ...arguments,
    index: `${username}-${name}-${random}`,
  };
};
