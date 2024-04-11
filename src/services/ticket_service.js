const TicketModel = require('../schemas/tickets_schema')
const SessionModel = require('../schemas/session_schema')

class TicketService {
    async createTicket({seat, value, session, movie}) {
        const existSession = await SessionModel.findById(session)
        if (!existSession) {
            throw new Error('There is not this session')
        }

        const sessionCapacity = existSession.capacity
        if (seat > sessionCapacity || seat < 0) {
            throw new Error('Seat invailable')
        }

        const allTickets = await TicketModel.find({session})
        const soldSeats = allTickets.map(ticket => ticket.seat)
        if (soldSeats.includes(seat)) {
            throw new Error('This seat already is not available')
        }
        const newTicket = new TicketModel({ movie: movie, session: session, seat: seat, value: value })
        await newTicket.save()
        return newTicket
    }

    async getTicket(id) {
        const ticket = await TicketModel.findById(id)       
        if (!ticket || ticket === null) {
            throw new Error('Ticket not found')
        }

        return ticket
    }
}

module.exports = new TicketService()