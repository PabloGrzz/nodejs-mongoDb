import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/mydatabase")
        console.log('MongoDB is conected');
    }catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
    }
}