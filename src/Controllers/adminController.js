exports.create = async (req, res) => {
  res
    .status(200)
    .json({ status: 'success', message: 'Admin was created successfully' });
};
exports.read = async (req, res) => {
  res.status(200).json({ status: 'success', data: 'Admin information' });
};
exports.delete = async (req, res) => {
  res
    .status(200)
    .json({ status: 'success', message: 'Admin was deleted successfully' });
};
exports.update = async (req, res) => {
  res
    .status(200)
    .json({ status: 'success', message: 'Admin was updated successfully' });
};
