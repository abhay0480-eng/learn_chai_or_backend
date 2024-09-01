import mongoose from 'mongoose';

import { DB_NAME } from '../constants.js';


const connectdb = async () => {
    try {

        const connectionInstance =  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`DB connected successfully ${connectionInstance}`);

    } catch (error) {
        console.log("Mongo db connection error: " + error);
        process.exit(1);
    }
}


export default connectdb