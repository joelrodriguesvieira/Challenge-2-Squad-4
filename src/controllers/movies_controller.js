const MovieService = require('../services/movie_service');

class MovieController {
    async createMovie(req, res) {
        try {
            const movie = await MovieService.createMovie(req.body);
            res.status(201).json(movie);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getMovies(req, res) {
        try {
            const movies = await MovieService.getMovies();
            res.status(200).json(movies);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getMovie(req, res) {
        try {
            const movie = await MovieService.getMovie(req.params.id);
            res.status(200).json(movie);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async uptadeMovie(req, res) {
        try {
            const movie = await MovieService.updateMovie(req.params.id);
            res.status(200).json(movie);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteCar(req, res) {
        try {
            const movie = await MovieService.deleteMovie(req.params.id);
            res.status(200).json(movie);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new MovieController();