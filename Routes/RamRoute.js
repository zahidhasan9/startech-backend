const express = require("express");
const {
  createRam,
  getaRam,
  getAllRam,
  updateRam,
  deleteRam,
  addToWishlist,
  rating,
} = require("../controller/Ram");
// const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();
router.post("/", createRam);
router.get("/:id", getaRam);
router.put("/:id", updateRam);
router.delete("/:id",  deleteRam);

// router.post("/", authMiddleware, isAdmin, createRam);

// router.get("/:id", getaRam);
// router.put("/wishlist", authMiddleware, addToWishlist);
// router.put("/rating", authMiddleware, rating);

// router.put("/:id", authMiddleware, isAdmin, updateRam);
// router.delete("/:id", authMiddleware, isAdmin, deleteRam);

router.get("/", getAllRam);

module.exports = router;