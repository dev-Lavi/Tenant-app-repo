import express from 'express';
import { createTask, getTasks, updateTask, deleteTask } from '../Controllers/taskcontroller.js';
import authMiddleware from '../middleware/authmiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';

const router = express.Router();

// All routes protected
router.use(authMiddleware);

// Create task
router.post('/', createTask);

// Get all tasks
router.get('/', getTasks);

// Update task
router.put('/:id', updateTask);

// Delete task
router.delete('/:id', deleteTask);

export default router;
