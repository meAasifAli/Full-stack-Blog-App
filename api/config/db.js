import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URL)
        if (conn) {
            console.log(`Connected to MongoDb ${conn.connection.host}`);
        }
    } catch (error) {
        console.log("error in connecting DB", error);
    }
}

export default connectDB;