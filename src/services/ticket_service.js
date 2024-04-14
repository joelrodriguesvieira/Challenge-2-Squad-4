const TicketModel = require('../schemas/tickets_schema')
const SessionModel = require('../schemas/session_schema')
const MovieModel = require('../schemas/movies_schema')

class TicketService {
    async createTicket({seat, session, movie}) {
        const existMovie = await MovieModel.findOne({name: movie})
        if (!existMovie) {
            throw new Error('There is not this movie')
        }

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
        const value = 10
        // a linha abaixo é a parte referente a tratar nos atributos de 'movie' e 'session'
        const newTicket = new TicketModel({ movie: movie._id, session: session, seat: seat, value: value })
        await newTicket.save()
        return newTicket
    }

    async getTickets() {
        return TicketModel.find()
    }

    async getTicket(id) {
        const ticket = await TicketModel.findById(id)       
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