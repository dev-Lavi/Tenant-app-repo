import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ['Admin', 'Member'], default: 'Member' },
    organisation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organisation',   
    },
});

const User = mongoose.model('User', userSchema);

export default User;