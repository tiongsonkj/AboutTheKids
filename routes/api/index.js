const router = require("express").Router();
const questionsRoutes = require("./questions");

// questions routes
router.use("/", questionsRoutes);

module.exports = router;
