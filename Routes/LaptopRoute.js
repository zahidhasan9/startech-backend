const express = require("express");
const {
  createLaptop,
  getaProduct,
  getAllLaptop,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
} = require("../controller/laptop");
// const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();
router.post("/", createLaptop);

// router.post("/", authMiddleware, isAdmin, createProduct);

// router.get("/:id", getaProduct);
// router.put("/wishlist", authMiddleware, addToWishlist);
// router.put("/rating", authMiddleware, rating);

// router.put("/:id", authMiddleware, isAdmin, updateProduct);
// router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

// router.get("/", getAllLaptop);

module.exports = router;