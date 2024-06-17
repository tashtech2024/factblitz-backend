import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
    username: {
        type: String, 
        required: true, 
        minLength: 4, 
        maxLength: 12
    }
});

userSchema.index({username: 1}); 


export default new mongoose.model('User, userSchema'); 