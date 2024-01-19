// import mongoose from 'mongoose';
require('dotenv').config();
const express = require("express");
const app =express();
const cors=require('cors');
const bodyParser = require("body-parser");
const mongoose  = require("mongoose");


app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

const DB = require('./config/db');
DB();
// const connectDB = async () => {
//     try {
//       await mongoose.connect(
//         // process.env.MONGODB_URI,
//         "mongodb+srv://zmzahidhasan181:zahidhasan9@cluster0.cclwvts.mongodb.net/",

//         {
//           useNewUrlParser: true,
//           useUnifiedTopology: true,
//           useCreateIndex: true,
//           useFindAndModify: false,
//         }
//       );
//       console.log('MongoDB Connected');
//     } catch (err) {
//       console.error(err.message);
//       // exit process with failure
//       process.exit(1);
//     }
//   };
//   connectDB();

  const port= process.env.Port
  app.listen( port,()=>{
    console.log("server running on port "+port)
  })
