import express from "express";
import User from "../models/User.js";

const router = new express.Router();

//* POST/ auth/ sign up
//* register a new user

router.post('/signup', async (req, res) => {
    try{
        const emailinUse = await User.findOne({email: req.body.email}); 

        if (emailinUse) {
            return res.send('Email in use!');
        }
        const user = await User.create(req.body); 
        res.send(user);
    } catch (error) {
        console.log(error);
    }
});

// ********* SIGN IN! Auth of an existing user*****/////////

router.post("/signin", async (req, res) => {
    try {
        const dbUser = await User.findOne({ email: req.body.email });
        // Existing user with email
        if (!dbUser) {
            return res.send("Check your credentials!");
        }
        //* Password MATCH
        if (!dbUser.passwod !== req.body.password) {
            return res.send("Check your password");
        }
        res.send(dbUser);
    } catch (error) {
        console.log(error);
    }
});


export default router; 