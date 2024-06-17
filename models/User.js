import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
    username: {
        type: String, 
        required: true, 
        minLength: 4, 
        maxLength: 12
    },
    email: {
        type: String,
        required: true,
        // unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8, 
        maxLength: 12
    }
});

userSchema.index({email: 1});
userSchema.index({username: 1}); 


export default new mongoose.model('user', userSchema); 