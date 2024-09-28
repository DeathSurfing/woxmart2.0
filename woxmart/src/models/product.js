import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this product.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price for this product.'],
    maxlength: [5, 'Price cannot be more than 99999'],
  },
  image: {
    type: String,
    required: [true, 'Please provide an image for this product.'],
  },
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);