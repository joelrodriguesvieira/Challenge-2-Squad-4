const express = require("express");
const MovieController = require('../controllers/movies_controller');

const router = express.Router();

router.post('/', MovieController.createMovie);
router.get('/', MovieController.getMovie);
router.get('/', MovieController.getMovies);
router.put('/', MovieController.uptadeMovies);
router.delete('/', MovieController.deleteMovie);

module.exports = router;