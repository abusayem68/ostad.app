exports.create = async (req, res) => {
  res
    .status(200)
    .json({ status: '“success”', data: 'Add or Create a product' });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: '“success”', data: 'product information' });
};

exports.delete = async (req, res) => {
  res
    .status(200)
    .json({ status: '“success”', data: 'Product was deleted successfully' });
};

exports.update = async (req, res) => {
  res
    .status(200)
    .json({ status: '“success”', data: 'Product was updated successfully' });
};
