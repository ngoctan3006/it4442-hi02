import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../models/user';

dotenv.config();

const salt = bcrypt.genSaltSync(12);

export const signup = async (req, res) => {
  const { username, password, confirmPassword, fullname, group, role } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Tài khoản đã tồn tại.' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Mật khẩu không khớp.' });
    }
    const hasedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      password: hasedPassword,
      fullname,
      group,
      role,
    });

    await user.save();
    const token = jwt.sign(
      {
        id: user._id,
        role,
      },
      process.env.JWT_SECRET
    );

    const { password: pw, ...userWithoutPassword } = user.toObject();
    res.status(201).json({ user: userWithoutPassword, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const signin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Sai tên đăng nhập hoặc mật khẩu.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Sai tên đăng nhập hoặc mật khẩu.' });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET
    );

    const { password: pw, ...userWithoutPassword } = user.toObject();
    res.status(200).json({ user: userWithoutPassword, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'Không tìm thấy người dùng.' });
    }

    const { password, ...userWithoutPassword } = user.toObject();
    res.json({ user: userWithoutPassword });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const changePassword = async (req, res) => {
  const { oldPassword, newPassword, confirmPassword } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'Không tìm thấy người dùng.' });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Sai mật khẩu cũ.' });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({ message: 'Mật khẩu không khớp.' });
    }

    const hasedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hasedPassword;
    await user.save();

    res.status(200).json({ message: 'Đổi mật khẩu thành công.' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
