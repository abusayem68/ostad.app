exports.create = async (req, res) => {
  res
    .status(200)
    .json({ status: '“success”', data: 'Portfolio was added successfully' });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: '“success”', data: 'Portfolio information' });
};

exports.delete = async (req, res) => {
  res
    .status(200)
    .json({ status: '“success”', data: 'Portfolio was deleted successfully' });
};

exports.update = async (req, res) => {
  res
    .status(200)
    .json({ status: '“success”', data: 'Portfolio was updated successfully' });
};
