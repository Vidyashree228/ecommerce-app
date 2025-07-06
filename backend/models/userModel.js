import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    cartData: {
      type: Object,
      default: {},
    },
  },
  {
    minimize: false,
  }
);

const UserModel = mongoose.models.User || mongoose.model('User', userSchema);

export default UserModel;
