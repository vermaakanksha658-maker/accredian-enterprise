const express = require("express");
const router = express.Router();

const {
  createEnquiry,
  getAllEnquiries,
} = require("../Controllers/enquirycontroller");

router.post("/create", createEnquiry);
router.get("/all", getAllEnquiries);

module.exports = router;