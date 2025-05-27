// routes/dashboard.js
import express from 'express';

const router = express.Router();
import authMiddleware from '../middleware/authMiddleware.js';

router.get('/', authMiddleware, (req, res) => {
  // Example response
  res.json({ message: `Welcome to the dashboard, user ${req.user.userId}` });
});

export default router;
