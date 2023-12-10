const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
    },
    imageURL: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Product = model('Product', productSchema);
module.exports = Product;
