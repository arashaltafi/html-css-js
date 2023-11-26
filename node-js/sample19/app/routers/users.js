const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersControllers');

router.get("/", userController.usersList);

module.exports = router;