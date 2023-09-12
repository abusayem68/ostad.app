exports.create = async (req, res) => {
  res
    .status(200)
    .json({ status: '“success”', data: 'message was added successfully' });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: '“success”', data: 'message information' });
};

exports.delete = async (req, res) => {
  res
    .status(200)
    .json({ status: '“success”', data: 'message was deleted successfully' });
};

exports.update = async (req, res) => {
  res
    .status(200)
    .json({ status: '“success”', data: 'message was updated successfully' });
};
