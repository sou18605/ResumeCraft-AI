const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const { checkPremium } = require("../middleware/premiumMiddleware"); // Imported premium middleware

const {
  getProfile,
  updatePassword,
} = require("../controllers/userController");

// Get Logged-in User Profile
router.get("/profile", protect, getProfile);

// Change Password
router.put("/profile/security", protect, updatePassword);

// --- EXAMPLE WHATSAPP ONLY PREMIUM ROUTE ---
// router.post("/whatsapp/test-alert", protect, checkPremium, (req, res) => {
//    res.json({ message: "WhatsApp message successfully triggered!" });
// });

module.exports = router;