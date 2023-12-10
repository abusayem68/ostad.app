const User = require('../models/User');

exports.createUser = async (req, res) => {
  const reqBody = req.body;
  try {
    const result = await User.create(reqBody);
    res.status(201).json({ status: 'success', data: result });
  } catch (error) {
    res.json({ status: 'failed', data: error.toString() });
  }
};
