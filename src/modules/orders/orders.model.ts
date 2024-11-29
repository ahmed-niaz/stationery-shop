import { model, Schema } from 'mongoose';
import { IOrders } from './orders.interface';

const ordersSchema = new Schema<IOrders>({
  email: {
    type: String,
    required: true,
  },
  product: {
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
  totalPrice: {
    type: Number,
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

const Orders = model('Orders', ordersSchema);
export default Orders;
