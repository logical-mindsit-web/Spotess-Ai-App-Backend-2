import jwt from 'jsonwebtoken';

const JWT_SECRET = 'SpotlessAi2024';

export const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: '1d' }
  );
};
