import express, { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"; 

const jwtSecret: any = process.env.JWT_SECRET

const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token;

        if (!req.cookies.token){
            return res.status(401).json('You need to Login');
        }

        const validToken = await jwt.verify(token, jwtSecret); 
        
        if (!validToken) {
            return res.status(401).json('Access Denied!!');
        }
    }

    catch (error) {
        console.log("from auth middleware: ", error);
    }   

    next();
}

export {auth};