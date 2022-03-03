const errorHandleMiddleware = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "There was an err" });
};

export default errorHandleMiddleware;
