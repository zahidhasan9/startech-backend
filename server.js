// import mongoose from 'mongoose';
const LaptopRoute =require('./Routes/LaptopRoute');
const ProcessorRoute=require('./Routes/ProcessorRoute');
const RamRoute=require('./Routes/RamRoute');
require('dotenv').config();
const express = require("express");
const app =express();
const cors=require('cors');
const bodyParser = require("body-parser");



app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use("/api/laptop", LaptopRoute);
app.use("/api/processor", ProcessorRoute);
app.use("/api/ram", RamRoute);
const DB = require('./config/db');

DB();

  const port= process.env.Port
  app.listen( port,()=>{
    console.log("server running on port "+port)
  })
