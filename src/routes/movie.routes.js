const express = require("express");
const MovieController = require('../controllers/movies_controller');

const router = express.Router();

router.post('/', MovieController.createMovie);
router.get('/:id', MovieController.getMovie);
router.get('/', MovieController.getMovies);
router.put('/:id', MovieController.updateMovie);
router.delete('/:id', MovieController.deleteMovie);

module.exports = router;