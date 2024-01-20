const express = require("express");
const {
  createProcessor,
  getaProcessor,
  getAllProcessor,
  updateProcessor,
  deleteProcessor,
  addToWishlist,
  rating,
} = require("../controller/Processor");
// const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();
router.post("/", createProcessor);
router.get("/:id", getaProcessor);
router.put("/:id", updateProcessor);
router.delete("/:id",  deleteProcessor);

// router.post("/", authMiddleware, isAdmin, createProcessor);

// router.get("/:id", getaProcessor);
// router.put("/wishlist", authMiddleware, addToWishlist);
// router.put("/rating", authMiddleware, rating);

// router.put("/:id", authMiddleware, isAdmin, updateProcessor);
// router.delete("/:id", authMiddleware, isAdmin, deleteProcessor);

router.get("/", getAllProcessor);

module.exports = router;