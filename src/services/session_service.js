const SessionModel = require('../schemas/session_schema')
const MovieModel = require('../schemas/movies_schema')

class SessionService {
    async createSession({capacity, movieTheater, time, movie}) {
        const existFilm = await MovieModel.findOne({name: movie})
        if (!existFilm) {
            throw new Error('Movie not found')
        }
        const newSession = new SessionModel({capacity: capacity, movieTheater: movieTheater, time: time, movie:existFilm.name})
        await newSession.save()
        return newSession
    }

    async getSessions() {
        return SessionModel.find()
    }

    async getSession(id) {
        const session = await SessionModel.findById(id)       
        if (!session || session === null) {
            throw new Error('Session not found')
        }

        return session
    }

    async updateSession(id, session) {
        const updateSession = await SessionModel.findByIdAndUpdate(id,session, { new: true })
        if (!updateSession) {
            throw new Error('Session not found')
        }

        return updateSession
    }

    async deleteSession(id) {
        const deleteSession = await SessionModel.findByIdAndDelete(id)
        if (!deleteSession) {
            throw new Error('Session not found')
        }

        return deleteSession
    }
}

module.exports = new SessionService()