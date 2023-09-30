exports.create = async (req, res) => {
  res
    .status(200)
    .json({ status: 'success', message: 'Post was created successfully' });
};
exports.read = async (req, res) => {
  res.status(200).json({ status: 'success', data: 'Post information' });
};
exports.delete = async (req, res) => {
  res
    .status(200)
    .json({ status: 'success', message: 'Post was deleted successfully' });
};
exports.update = async (req, res) => {
  res
    .status(200)
    .json({ status: 'success', message: 'Post was updated successfully' });
};
