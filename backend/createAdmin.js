import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import UserModel from './models/userModel.js';

dotenv.config(); // Load .env variables

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const existing = await UserModel.findOne({ email: process.env.ADMIN_EMAIL });

    if (existing) {
      console.log('⚠️ Admin already exists.');
      return;
    }

    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

    const admin = new UserModel({
      name: 'Admin',
      email: process.env.ADMIN_EMAIL,
      password: hashedPassword,
      isAdmin: true,
    });

    await admin.save();
    console.log('✅ Admin created successfully!');
    mongoose.disconnect();
  } catch (err) {
    console.error('❌ Error creating admin:', err.message);
    mongoose.disconnect();
  }
};

createAdmin();
