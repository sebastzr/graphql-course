const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost/mongodbgraphql");
    console.log(">> DB is connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;
