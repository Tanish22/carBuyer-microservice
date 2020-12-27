import mongoose from "mongoose";

const mongodb_atlas_url: string = `${process.env.MONGODB_ATLAS_URL}`;

const connectDB = async () => {
  try {
    await mongoose.connect(mongodb_atlas_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

  } catch (error) {
    console.log(`${error} : Cant connect to the database !!`);
  }

  mongoose.connection.on("connected", (err, res) => {
    console.log("Connected to MongoDB");
  });

  mongoose.connection.on("error", (err) => {
    console.log(`err : ${err}`);
  });
};

export { connectDB as startDB };
