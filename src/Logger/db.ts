import mongoose from "mongoose";
import config from "../config";


const connectDB = async () => {
    try{
        await mongoose.connect(config.mongoURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
          });
      
          console.log("Mongoose Connected ...");
    }catch(err){
        console.log(err.mesaage);
        console.log(1);
    }

}

export default connectDB;