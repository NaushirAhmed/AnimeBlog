// test-cloudinary.js
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

cloudinary.uploader.upload('https://res.cloudinary.com/demo/image/upload/sample.jpg')
  .then(result => console.log('SUCCESS:', result.secure_url))
  .catch(err => console.error('FAILED:', err.message));