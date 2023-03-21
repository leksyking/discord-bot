const mongoose = require("mongoose");

module.exports = (url) => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(url);
};
