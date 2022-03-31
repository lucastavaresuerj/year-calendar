exports.handler = async (event) => {
  const { appSyncContext } = event;
  return {
    result: `Well done ${appSyncContext.identity.username}`,
  };
};
