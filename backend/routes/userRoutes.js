import express from 'express';
import bcrypt from 'bcrypt';
import UserModel from '../models/userModel.js';
import { adminLogin } from '../controllers/userController.js'; // ✅ Add this import

const userRouter = express.Router();

// ✅ Add admin login route
userRouter.post('/admin', adminLogin);

// ✅ Admin seeding route
userRouter.post('/admin-seed', async (req, res) => {
  try {
    const email = 'admin@example.com';
    const password = await bcrypt.hash('admin123', 10);

    const adminExists = await UserModel.findOne({ email });

    if (adminExists) {
      adminExists.password = password;
      adminExists.isAdmin = true;
      await adminExists.save();
      return res.status(200).json({ message: '✅ Admin updated' });
    }

    const newAdmin = new UserModel({
      name: 'Super Admin',
      email,
      password,
      isAdmin: true,
    });

    await newAdmin.save();
    res.status(201).json({ message: '✅ Admin created' });
  } catch (error) {
    res.status(500).json({ message: '❌ Failed', error: error.message });
  }
});

export default userRouter;
