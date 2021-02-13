import mongoose from "mongoose";

const atlas_user_url : any = process.env.ATLAS_USER_URL;
 
const connectDB = async () => {
    try{
        await mongoose.connect(atlas_user_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        })
    }

    catch(error){
        console.log(`${error} : Cannot connect to the database !!`);        
    }
    
    finally {
        const db = mongoose.connection;

        db.on('connected', (err, res) => {
            console.log('Connected to MongoDB !!');    
        })

        db.on('error', (err) => {
            console.log(`${err} : Cannot establish a connection to MongoDB !!`);    
        })
    }
}

export { connectDB as startDB }