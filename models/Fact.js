import mongoose from 'mongoose';
import { commentSchema } from './comment';

const factDoc = {
    content: newFact, 
    username: "",
    likes: 400,
    factRepost: 50,
    timestamp: new Date(),
    id: uuidv4(),
};

const factSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    comments: [commentSchema], 
    content: {
        type: String, 
        required: true,
    }, 
    likes: {
        type: Number,
        default: 0,
    },
    factRepost:{
        type: Number,
        default: 0
    },
}, {timestamps: true}); 