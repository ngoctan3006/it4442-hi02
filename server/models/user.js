import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullname: { type: String, required: true },
  role: { type: Number, default: 0 },
  group: { type: Number, required: true },
});

export default mongoose.model('User', userSchema);
