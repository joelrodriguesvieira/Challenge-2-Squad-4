const SessionService = require('../services/session_service');

class SessionController {
    async createSession(req, res) {
        try {
            const session = await SessionService.createSession(req.body);
            res.status(201).json(session)
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getSessions(req, res) {
        try {
            const sessions = await SessionService.getSessions();
            res.status(200).json(sessions);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getSession(req, res) {
        try {
            const sessions = await SessionService.getSession(req.params.id);
            res.status(200).json(sessions);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateSession(req, res) {
        try {
            const sessions = await SessionService.updateSession(req.params.id);
            res.status(200).json(sessions);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteSession(req, res) {
        try {
            const sessions = await SessionService.deleteSession(req.params.id);
            res.status(200).json(sessions);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new SessionController();