  require('dotenv').config();
// const chalk = require('chalk');
// const mongoose = require('mongoose');
const { default: mongoose } = require("mongoose");
const connectDB = () => {
  try {
    mongoose.set('strictQuery', false)
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("DAtabase error");
  }
};


// const connectDB = async () => {
//   try {
//       mongoose.set('strictQuery', false);
//       await mongoose.connect(process.env.MONGO_URI, {
//           useNewUrlParser: true,
//           useUnifiedTopology: true,
          
//       });
//       console.log('MongoDB Connected...');
//   } catch (err) {
//       console.error(err.message);
//       // make the process fail
//       process.exit(1);
//   }
// }


module.exports = connectDB;
