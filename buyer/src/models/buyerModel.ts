import mongoose, { Schema } from "mongoose";

import {Password} from '../helpers/password';

const saltRounds: any = 8;
const saltPW: any = process.env.BCRYPT_HASH;

//  building interfaces to tell tsc to properties required to create a buyer (new Buyer)
interface BuyerAttr {
  name: string;
  email: string;
  password: string;
}

//  tells tsc which properties & methods the buyer model will have i.e. eg. in this case, the build function that returns a Buyer Document
interface BuyerModel extends mongoose.Model<BuyerDoc> {
  buildBuyer(attrs: BuyerAttr): BuyerDoc;
}
 
//  tells tsc about the props the actual saved buyer doc will have
interface BuyerDoc extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  createdAt?: string;
  updatedAt?: string;
}

const buyerSchema: mongoose.Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  }, 
  {
    timestamps: true
  }
);

//  attaching a function to the buyer object that is being built
buyerSchema.statics.buildBuyer = (attrs: BuyerAttr) => {
  return new Buyer(attrs);
};

buyerSchema.pre('save', async function (next: any) {
  const buyer: any = this;

  if(buyer.isModified('password')){          
    console.log('from mongoose middleware');    

    buyer.password = await Password.hashPassword(saltPW, saltRounds);    
  }

  next();
})

//  2nd generic type i.e. <BuyerModel> states that mongoose.Model function will have a return type of BuyerModel
       
const Buyer = mongoose.model<BuyerDoc, BuyerModel>("buyer", buyerSchema);

export { Buyer };
