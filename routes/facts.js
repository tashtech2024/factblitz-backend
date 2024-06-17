import express from "express";
import User from "../models/User";
import Fact from "../models/Fact.js"

const router = new express.Router();

//* Post Facts/

    router.post("/", async (req, res) => {
    console.log(req.body);
    const {username, newFact} = req.body;

    //*Check if user exists

    const dbUser = await User.findOne ({ username }); 

    if(dbUser) {
        console.log(dbUser);

        const fact = await Fact.Create({
            content: newFact, 
            user:newUser_id, 
            username: newUser.username,
        }); console.log(fact);
        return res.json(fact);
        }
    });

    //* Get Facts
    router.get("/facts", async (req, res) => {
        const facts = await Fact.find();
        res.send(facts);
    });

    router.delete("/facts", async (req, res) =>{
        res.send("deleting fact.....");
    });

    router.put("/facts", async (req, res) => {
        res.send("updating fact....")
    });

    export default router; 
