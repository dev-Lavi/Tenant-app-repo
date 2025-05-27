import mongoose from 'mongoose';

const organisationSchema = new mongoose.Schema({
    name:{ type: String , required:true },
    members:[{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
},{timestamps: true});

const Organisation = mongoose.model('Organisation', organisationSchema);

export default Organisation;