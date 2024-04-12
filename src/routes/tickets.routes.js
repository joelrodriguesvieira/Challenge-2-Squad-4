const express = require("express");
const TicketController = require('../controllers/tickets_controller');

const router = express.Router();

router.post('/', TicketController.createTicket);
router.get('/:id', TicketController.getTicket);

module.exports = router;