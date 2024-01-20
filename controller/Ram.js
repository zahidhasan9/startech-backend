const Ram = require("../models/RamModel");
// const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const validateMongoDbId = require("../utils/validateMongodbId");

const createRam = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newRam = await Ram.create(req.body);
    res.json(newRam);
  } catch (error) {
    throw new Error(error);
  }
});

const updateRam = async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    if (req.body.title) {
            req.body.slug = slugify(req.body.title);
    }
    const ram = await Ram.findByIdAndUpdate(id, req.body, {new:true});
    const updatedRam = await ram.save()
    res.status(200).json(updatedRam);
  } catch (err) {
    res.status(400).json(err);
  }
};



const deleteRam = asyncHandler(async (req, res) => {
  const id = req.params;
  validateMongoDbId(id);
  try {
    const deleteRam = await Ramp.findOneAndDelete(id);
    res.json(deleteRam);
  } catch (error) {
    throw new Error(error);
  }
});

const getaRam = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const findRam = await Ram.findById(id);
    res.json(findRam);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllRam = asyncHandler(async (req, res) => {
  try {
    // Filtering
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query = Ram.find(JSON.parse(queryStr));

    // Sorting

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    // limiting the fields

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    // pagination

    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const RamCount = await Ram.countDocuments();
      if (skip >= RamCount) throw new Error("This Page does not exists");
    }
    const ram = await query;
    res.json(ram);
  } catch (error) {
    throw new Error(error);
    
  }
});


module.exports = {
  createRam,
  getaRam,
  getAllRam,
  updateRam,
  deleteRam,
  // addToWishlist,
  // rating,
};