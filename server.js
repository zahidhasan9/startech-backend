// import mongoose from 'mongoose';
const LaptopRouter =require('./Routes/LaptopRoute')
require('dotenv').config();
const express = require("express");
const app =express();
const cors=require('cors');
const bodyParser = require("body-parser");
const mongoose  = require("mongoose");


app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use("/api/laptop", LaptopRouter);
const DB = require('./config/db');

DB();

  const port= process.env.Port
  app.listen( port,()=>{
    console.log("server running on port "+port)
  })
