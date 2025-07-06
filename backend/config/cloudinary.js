// backend/config/cloudinary.js
import { v2 as cloudinary } from 'cloudinary';
import 'dotenv/config'; // Optional, if already loaded in server.js

const connectToCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  console.log('✅ Cloudinary connected');
};

export default connectToCloudinary;
