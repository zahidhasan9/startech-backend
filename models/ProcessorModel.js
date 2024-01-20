const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var ProcessorSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    stock: {
      type: String,
      required: true,
      enum: ["in_stock", "pre-order", "up-comming"],
      default: "user",
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    socket: {
      type: String,
      required: true,
      trim: true,
    },
    processor_model: {
      type: String,
      required: true,
      trim: true,
    },
    processor_generation: {
      type: String,
      required: true,
      trim: true,
    },
    processor_core: {
      type: String,
      required: true,
      trim: true,
    },
    processor_thread: {
      type: String,
      required: true,
      trim: true,
    },
    base_clock_speed: {
      type: String,
      required: true,
      trim: true,
    },
    max_clock_speed: {
      type: String,
      required: true,
      trim: true,
    },
    cache_memory: {
      type: String,
      required: true,
      trim: true,
    },
    Default_TDP: {
      type: String,
      required: true,
      trim: true,
    },
  
    graphics: {
      type: String,
      required: true,
      trim: true,
    },
    Memory_max_size:{
      type: String,
      required: true,
      trim: true,
    },
    Memory_type_ddr:{
      type: String,
      required: true,
      trim: true,
    },
    Warranty: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    
    quantity: {
      type: Number,
      required: true,
    },
    sold: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: String,
        url: String,
      },
    ],
  
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Processor", ProcessorSchema);