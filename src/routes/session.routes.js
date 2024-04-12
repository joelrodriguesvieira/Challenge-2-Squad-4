const express = require("express");
const SessionController = require('../controllers/session_controller');

const router = express.Router();

router.post('/', SessionController.createSession);
router.get('/:id', SessionController.getSession);
router.get('/', SessionController.getSessions);
router.put('/:id', SessionController.updateSession);
router.delete('/:id', SessionController.deleteSession);

module.exports = router;