const mongoose = require('mongoose');
require('dotenv').config()

const connect = () => {
  try {
    return mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = connect;


               