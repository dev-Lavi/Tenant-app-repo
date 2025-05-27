// routes/dashboard.js
import express from 'express';
import authMiddleware from '../Middleware/authmiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, (req, res) => {
  res.json({ message: `Welcome to the dashboard, user ${req.user.userId}` });
});

export default router;
