exports.handler = async (event) => {
  const {
    appSyncContext: {
      identity: { username },
      arguments: { name },
    },
  } = event;
  const random = (Math.random() * 1000000).toFixed(0);

  return {
    index: `${username}-${name}-${arguments}`,
  };
};
