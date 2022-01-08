import express, { Request, Response } from "express";
import {BuyerModel} from "../../src/models/buyerModel";

declare namespace Express {
    export interface Request {
      buyer: any
    }
  }