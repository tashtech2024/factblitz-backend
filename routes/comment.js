import express from "express"

const router = new express.Router();

//* Post Comments/

    router.post("/", async (req, res) => {
    console.log(req.body);
    const {username, comment} = req.body;
    });

    //* Get Facts
    router.get("/comment", async (req, res) => {
        const comment = await comment.find();
        res.send(comment);
    });

    router.delete("/comment", async (req, res) =>{
        res.send("deleting comment.....");
    });

    router.put("/comment", async (req, res) => {
        res.send("updating comment....")
    });

    export default router; 
