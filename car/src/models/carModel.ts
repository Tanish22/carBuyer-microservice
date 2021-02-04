import mongoose, { Schema } from "mongoose";
import { nextTick } from "process";

interface CarAttrs {
    brand : string;
    modelName : string;
    price : number;   
}

interface CarModel extends mongoose.Model <CarDoc> {
    buildCar(attrs : CarAttrs) : CarDoc;
}

interface CarDoc extends mongoose.Document {
    brand : string;
    modelName : string;
    price : number;
    createdAt? : string;
    updatedAt? : string;
}

const carSchema : mongoose.Schema = new mongoose.Schema({
    brand : {
        type : String,
        required : true
    },

    modelName : {
        type: String,
        required : true
    },

    price : {
        type : Number,
        required : true 
    }
})

carSchema.statics.buildCar = (attrs : CarAttrs) => {
    return new Car(attrs);
}

const Car = mongoose.model <CarDoc, CarModel> ("Car", carSchema);

export { Car };