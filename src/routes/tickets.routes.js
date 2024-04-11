const express = require("express");
const TicketController = require('../controllers/tickets_controller');

const router = express.Router();

router.post('/', TicketController.createTicket);
router.get('/', TicketController.getTicket);

module.exports = router;