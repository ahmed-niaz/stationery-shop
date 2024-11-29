import { model, Schema } from 'mongoose';
import { IProducts } from './products.interface';

const productsSchema = new Schema<IProducts>({
  name: {
    type: String,
    required: [true, 'please provide the products name'],
  },
  brand: {
    type: String,
    required: [true, 'please provide the brand name'],
  },
  price: {
    type: Number,
    required: true,
    validate: {
      validator: function (price: number) {
        return price > 0;
      },
      message: `{VALUE} is not a positive number`,
    },
  },
  category: [String],
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    validate: {
      validator: function (quantity: number) {
        return quantity > 0;
      },
      message: `{VALUE} is not a positive number`,
    },
  },
  inStock: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Products = model('Products', productsSchema);
export default Products;
