const User = require('../models/User');

exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { name, email, phone, dateOfBirth, gender } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.user.userId,
      { name, email, phone, dateOfBirth, gender },
      { new: true }
    ).select('-password');
    
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile' });
  }
};

