const express =
require("express");

const router =
express.Router();

const {
createInterview,
getInterviews,
} =
require(
"../controllers/interviewController"
);

const {
protect,
} =
require(
"../middleware/authMiddleware"
);


// Create Interview
router.post(
"/",
protect,
createInterview
);


// Get Interviews
router.get(
"/",
protect,
getInterviews
);

module.exports =
router;