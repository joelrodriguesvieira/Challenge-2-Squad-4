const express = require("express");
const SessionController = require('../controllers/session_controller');

const router = express.Router();

router.post('/', SessionController.createSession);
router.get('/', SessionController.getSession);
router.get('/', SessionController.getSessions);
router.put('/', SessionController.updateSession);
router.delete('/', SessionController.deleteSession);

module.exports = router;