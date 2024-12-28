const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");

const Story = require("../models/Story");

// @desc  Login/landing page
// @route GET /
router.get("/", ensureGuest, (req, res) => {
  res.render("login", {
    layout: "login",
  });
});

// @desc  Dashboard
// @route GET /dashboard
router.get("/dashboard", ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({ user: req.user.id }).lean(); // lean passed JS object from DBB, not JSON
    res.render("dashboard", {
      name: req.user.firstName,
      displayName: req.user.displayName,
      stories,
    });
  } catch (err) {
    console.error(err);
    res.render("/views/error/500.hbs");
  }
});

module.exports = router;
