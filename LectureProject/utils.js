module.exporst = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch(next);
  };
};
