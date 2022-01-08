import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"; 

import { Buyer } from "../../models/buyerModel";

const jwtSecret: any = process.env.JWT_SECRET;


const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token; 

        if (!req.cookies.token){
            return res.status(401).json('You need to Login');
        }

        let decoded = await jwt.verify(token, jwtSecret); 

        console.log("from decoded: ", decoded);
        
        // @ts-ignore
        req.buyer = decoded;

        next();
    }

    catch (error) {
        console.log("from auth middleware: ", error);
    }   
}

export {auth};