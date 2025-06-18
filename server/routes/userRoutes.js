const express = require('express');
const router = express.Router();
const { getUserProfile, updateProfile } = require('../controllers/userController');
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/profile', verifyToken, getUserProfile);
router.put('/profile/update', verifyToken, updateProfile);

module.exports = router;
