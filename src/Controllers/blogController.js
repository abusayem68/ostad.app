exports.create = async (req, res) => {
  res
    .status(200)
    .json({ status: '“success”', data: 'blog was added successfully' });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: '“success”', data: 'blog information' });
};

exports.delete = async (req, res) => {
  res
    .status(200)
    .json({ status: '“success”', data: 'blog was deleted successfully' });
};

exports.update = async (req, res) => {
  res
    .status(200)
    .json({ status: '“success”', data: 'blog was updated successfully' });
};
