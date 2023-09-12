exports.create = async (req, res) => {
  res
    .status(200)
    .json({ status: '“success”', data: 'comment was added successfully' });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: '“success”', data: 'comment information' });
};

exports.delete = async (req, res) => {
  res
    .status(200)
    .json({ status: '“success”', data: 'comment was deleted successfully' });
};

exports.update = async (req, res) => {
  res
    .status(200)
    .json({ status: '“success”', data: 'comment was updated successfully' });
};
