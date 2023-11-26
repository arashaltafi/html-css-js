const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersControllers');

router.get("/", userController.usersList);

router.post("/", userController.addUser);

router.get('/:id', userController.getUser);

module.exports = router;