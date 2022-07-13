import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const auth = (req, res, next) => {
  const token = req.header('authorization').split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Bạn chưa đăng nhập.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Token không hợp lệ.' });
  }
};
