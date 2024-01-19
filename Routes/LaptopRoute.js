const express = require("express");
const {
  createLaptop,
  getaLaptop,
  getAllLaptop,
  updateLaptop,
  deleteLaptop,
  addToWishlist,
  rating,
} = require("../controller/laptop");
// const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();
router.post("/", createLaptop);
router.get("/:id", getaLaptop);
router.put("/:id", updateLaptop);
router.delete("/:id",  deleteLaptop);

// router.post("/", authMiddleware, isAdmin, createLaptop);

// router.get("/:id", getaLaptop);
// router.put("/wishlist", authMiddleware, addToWishlist);
// router.put("/rating", authMiddleware, rating);

// router.put("/:id", authMiddleware, isAdmin, updateLaptop);
// router.delete("/:id", authMiddleware, isAdmin, deleteLaptop);

router.get("/", getAllLaptop);

module.exports = router;