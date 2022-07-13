import mongoose from 'mongoose';

const workSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: { type: String, default: 'processing' },
  // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
});

export default mongoose.model('Work', workSchema);
