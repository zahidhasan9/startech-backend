const Processor = require("../models/ProcessorModel");
// const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const validateMongoDbId = require("../utils/validateMongodbId");

const createProcessor = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newProcessor = await Processor.create(req.body);
    res.json(newProcessor);
  } catch (error) {
    throw new Error(error);
  }
});

const updateProcessor = async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    if (req.body.title) {
            req.body.slug = slugify(req.body.title);
    }
    const processor = await Processor.findByIdAndUpdate(id, req.body, {new:true});
    const updatedProcessor = await processor.save()
    res.status(200).json(updatedProcessor);
  } catch (err) {
    res.status(400).json(err);
  }
};



const deleteProcessor = asyncHandler(async (req, res) => {
  const id = req.params;
  validateMongoDbId(id);
  try {
    const deleteProcessor = await Processorp.findOneAndDelete(id);
    res.json(deleteProcessor);
  } catch (error) {
    throw new Error(error);
  }
});

const getaProcessor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const findProcessor = await Processor.findById(id);
    res.json(findProcessor);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllProcessor = asyncHandler(async (req, res) => {
  try {
    // Filtering
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query = Processor.find(JSON.parse(queryStr));

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
      const ProcessorCount = await Processor.countDocuments();
      if (skip >= ProcessorCount) throw new Error("This Page does not exists");
    }
    const processor = await query;
    res.json(processor);
  } catch (error) {
    throw new Error(error);
    
  }
});


module.exports = {
  createProcessor,
  getaProcessor,
  getAllProcessor,
  updateProcessor,
  deleteProcessor,
  // addToWishlist,
  // rating,
};