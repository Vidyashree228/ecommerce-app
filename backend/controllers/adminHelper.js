import bcrypt from 'bcrypt';
import UserModel from '../models/userModel.js';

export const resetAdminPassword = async (req, res) => {
  try {
    const email = 'user.greatstack@gmail.com';
    const plainPassword = '123456789';

    const hash = await bcrypt.hash(plainPassword, 10);

    const result = await UserModel.updateOne(
      { email },
      { $set: { password: hash, isAdmin: true } }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: 'Admin user not found' });
    }

    return res.status(200).json({ message: '✅ Admin password reset successfully' });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
