const callback = (req, res) => {
  debugger;
  res.end('In my module');
};

module.exports = {
  callback,
};
