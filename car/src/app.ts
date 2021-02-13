import express, {Request, Response} from "express";
import {json} from "body-parser";

import { config } from "dotenv";
config();

import { startDB } from "./db/db"
import { createCarRouter } from "./routes/createCar";


const app: any = express();

const PORT: any = process.env.PORT;

app.use(json());

//  route middlewares
app.use(createCarRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('<h1> Welcome to Car Service </h1>')
})

app.listen(PORT, async () => {
    try{
        await startDB();
        console.log('Connected to MongoDB !!');    

        console.log(`listening to port ${PORT}`);
        console.log("v1.0.0");
    }   
    catch(error) {
        console.log(error, "Error connecting to the database !!");
    }     
})