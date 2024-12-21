import mongoose from 'mongoose';

const MONGO_URL = 'mongodb+srv://logicalmindsitcareers:GESutDdxY6vjsYAd@spotlessaidatabase.6qj8v.mongodb.net/SpotlessAi-data';

const connectDB = async () => {
  try {
    const options = { serverSelectionTimeoutMS: 30000 }; 
    await mongoose.connect(MONGO_URL, options);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    process.exit(1); // Exit process on connection failure
  }
};

export default connectDB;