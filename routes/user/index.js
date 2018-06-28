const router = require("express").Router();
const userRoutes = require("./userRouting");

// user routes
router.use("/", userRoutes);

module.exports = router;
