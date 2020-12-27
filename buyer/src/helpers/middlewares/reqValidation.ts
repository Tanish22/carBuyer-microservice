import {Request, Response, NextFunction} from "express";
import {validationResult} from 'express-validator';

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        //throw new Error(errors.array());
        throw new Error("PLease enter your Valid Credentials");
    }

    next();
}