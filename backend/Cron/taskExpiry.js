import cron from 'node-cron';
import Task from '../routes/tasks.js'; // Adjust the import path as necessary
const taskExpiryJob = () => {
  cron.schedule('0 * * * *', async () => {
    try {
      const now = new Date();
      const expiredTasks = await Task.updateMany(
        { dueDate: { $lt: now }, status: { $in: ['Todo', 'In Progress'] } },
        { $set: { status: 'Expired' } }
      );
      console.log(`Task Expiry Job: Updated ${expiredTasks.modifiedCount} tasks to Expired status`);
    } catch (error) {
      console.error('Task Expiry Job error:', error);
    }
  });
};

export default taskExpiryJob;
