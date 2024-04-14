const TicketService = require('../services/ticket_service');

class TicketController {
    async createTicket(req, res) {
        try {
            const ticket = await TicketService.createTicket(req.body);
            res.status(201).json(ticket);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async getTicket(req, res) {
        try {
            const ticket = await TicketService.getTicket(req.params.id);
            res.status(200).json(ticket);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    
    async getTickets(req,res) {
        try {
            const ticket = await TicketService.getTickets();
            res.status(200).json(ticket);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async updateTicket(req, res) {
        try {
            const tickets = await TicketService.updateTicket(req.params.id, req.body);
            res.status(200).json(tickets);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    async deleteTicket(req, res) {
        try {
            const ticket = await TicketService.deleteTicket(req.params.id);
            res.status(200).json(ticket);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = new TicketController();