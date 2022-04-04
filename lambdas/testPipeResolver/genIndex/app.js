exports.handler = async (event) => {
  const {
    appSyncContext: {
      identity: { username },
      arguments: cntxArgs,
      arguments: {
        calendar: { name },
      },
    },
  } = event;

  const random = (Math.random() * 1000000).toFixed(0);

  return {
    ...cntxArgs,
    index: `${username}-${name}-${random}`,
  };
};
