const MovieModel = require('../schemas/filme_schema')

class MovieService {
    async createMovie(data) {
        const newMovie = new MovieModel(data)
        await newMovie.save()
        return newMovie
    }

    async getMovies() {
        return MovieModel.find()
    }

    async getMovie(id) {
        const movie = MovieModel.findById(id)       
        if (!movie || movie === null) {
            throw new Error('Movie not found')
        }

        return movie
    }

    async updateMovie(id, movie) {
        const updateMovie = await MovieModel.findByIdAndUpdate(id,movie, { new: true })
        if (!updateMovie) {
            throw new Error('Movie not found')
        }

        return updateMovie
    }

    async deleteMovie(id) {
        const deleteMovie = await MovieModel.findByIdAndDelete(id)
        if (!deleteMovie) {
            throw new Error('Movie not found')
        }

        return deleteMovie
    }
}