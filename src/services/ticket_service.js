const TicketModel = require('../schemas/tickets_schema')

class TicketService {
    async createTicket(data) {
        const newTicket = new TicketModel(data)
        await newTicket.save()
        return newTicket
    }

    async getTickets() {
        return TicketModel.find()
    }

    async getTicket(id) {
        const ticket = TicketModel.findById(id)       
        if (!ticket || ticket === null) {
            throw new Error('Ticket not found')
        }

        return ticket
    }

    async updateTicket(id, ticket) {
        const updateTicket = await TicketModel.findByIdAndUpdate(id,ticket, { new: true })
        if (!updateTicket) {
            throw new Error('Ticket not found')
        }

        return updateTicket
    }

    async deleteTicket(id) {
        const deleteTicket = await TicketModel.findByIdAndDelete(id)
        if (!deleteTicket) {
            throw new Error('Ticket not found')
        }

        return deleteTicket
    }
}

module.exports = new TicketService()