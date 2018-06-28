const router = require("express").Router();
const questionsController = require("../../controllers/questionsController");

// Matches with "/api/questions"
router.route("/")
  .get((req, res) => res.send('Hello World'));

// Matches with "/api/questions/:id"
router.route("/questions/:id")
  .get(questionsController.tempQ)


module.exports = router;
