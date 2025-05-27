// routes/dashboard.js
import express from 'express';
import authmiddleware from '../Middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authmiddleware, (req, res) => {
  res.json({ message: `Welcome to the dashboard, user ${req.user.userId}` });
});

export default router;
