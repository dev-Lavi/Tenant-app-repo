// const express = require('express');
// const router = express.Router();
// const inviteController = require('../Controllers/Invitecontroller');
// const authMiddleware = require('../Middleware/authMiddleware');
// const roleMiddleware = require('../Middleware/roleMiddleware');



// router.use(authMiddleware);

// router.post('/', authMiddleware, roleMiddleware(['Admin']), inviteController.inviteUser);



// router.post('/', inviteController.inviteUser);

// module.exports = router;

import express from 'express';
const router = express.Router();
import inviteController from '../Controllers/Invitecontroller.js';
import authMiddleware from '../middleware/auth.js';
import roleMiddleware from '../middleware/roleMiddleware.js';

router.post('/', authMiddleware, roleMiddleware(['Admin']), inviteController.inviteUser);
router.post('/accept/:token', inviteController.acceptInvite);


module.exports = router;

