import mongoose from 'mongoose'
import { DBName } from '../constants.js';

const DBconnection = async () => {
    try {
        //    const connectionInstances=await  mongoose.connect(`${process.env.MONGODB_URI}/${DBName}`)

        mongoose.connect(`${process.env.MONGODB_URI}/${DBName}`)
            // .then(() => console.log('Connected to MongoDB Atlas'))
            // .catch(err => console.error('MongoDB connection error:', err));


        //    console.log('Mongoose Connected !! ',connectionInstances);
    } catch (error) {
        console.log("MongoDB connection failed", error);
        process.exit(1)
    }
}

export default DBconnection


 