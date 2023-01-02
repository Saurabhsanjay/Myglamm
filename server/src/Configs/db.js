const mongoose = require('mongoose');
require('dotenv').config()

const connect = () => {
  try {
    return mongoose.connect('mongodb+srv://paradiseproduct:paradiseproduct@cluster0.bqqyl.mongodb.net/paradise_prouct_data?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = connect;


               