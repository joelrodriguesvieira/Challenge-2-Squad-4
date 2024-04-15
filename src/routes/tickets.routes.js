const express = require("express");
const TicketController = require('../controllers/tickets_controller');

const router = express.Router();

router.post('/', TicketController.createTicket);
router.get('/:id', TicketController.getTicket);
router.get('/', TicketController.getTickets);

module.exports = router;