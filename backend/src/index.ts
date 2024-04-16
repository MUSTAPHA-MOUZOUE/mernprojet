import express ,{Request,Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=>console.log("khdama db"))
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user",myUserRoute);

app.listen(3002,() => {console.log("khdaaaaam")});