import mongoose from "mongoose";

//const atlas_user_url: string = `${process.env.atlas_user_url}`;
const atlas_user_url : any = process.env.ATLAS_USER_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(atlas_user_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

  } catch (error) {
    console.log(`${error} : Cant connect to the database !!`);
  }

  finally {
    mongoose.connection.on("connected", (err, res) => {
      console.log("Connected to MongoDB");
    });
  
    mongoose.connection.on("error", (err) => {
      console.log(`err : ${err}`);
    });
  }
};

export { connectDB as startDB };
