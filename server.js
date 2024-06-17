import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import UserRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";
import cors from "cors";
import { commentSchema } from "./models/comments.js";


dotenv.config(); 

//*Connect to MongoDB database

mongoose.connect(process.env.ATLAS_URL);

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares ========================//

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//? Routes=============================//

app.get('/', (req, res) => {
  res.send('Welcome to the User Auth API!');
});
app.use('/users', UserRouter);
app.use('/facts', UserRouter);
app.use('/comments', commentSchema);
app.use('/auth', authRouter);

//! Global Error middleware

app.use((err, req, res, next) => {
    res.send('Something went wrong, Please try again!');
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});