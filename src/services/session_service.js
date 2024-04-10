const SessionModel = require('../schemas/session_schema')

class SessionService {
    async createSession(data) {
        const newSession = new SessionModel(data)
        await newSession.save()
        return newSession
    }

    async getSessions() {
        return SessionModel.find()
    }

    async getSession(id) {
        const session = SessionModel.findById(id)       
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