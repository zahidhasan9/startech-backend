const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var LaptopSchema = new mongoose.Schema(
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
      default: "up-comming",
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    model: {
      type: String,
      required: true,
      trim: true,
    },
    processor_type: {
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
    display_size: {
      type: String,
      required: true,
      trim: true,
    },
    display_type: {
      type: String,
      required: true,
      trim: true,
    },
    ram_size: {
      type: String,
      required: true,
      trim: true,
    },
    ram_type: {
      type: String,
      required: true,
      trim: true,
    },
    hard_disk: {
      type: String,
      required: true,
      trim: true,
    },
    ssd: {
      type: String,
      required: true,
      trim: true,
    },
    graphics: {
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
    // color: [],
    // tags: String,
    // ratings: [
    //   {
    //     star: Number,
    //     comment: String,
    //     postedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    //   },
    // ],
    // totalrating: {
    //   type: String,
    //   default: 0,
    // },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Laptop", LaptopSchema);