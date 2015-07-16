const loggerMiddleware = () => {
  return next => action => { // eslint-disable-line no-unused-vars
    console.log("** ACTION", action);
  };
};

export default loggerMiddleware;
