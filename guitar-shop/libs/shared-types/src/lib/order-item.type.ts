import { Product } from './product.type';

export type OrderItem = {
  product: Product,
  price: number;
  quantity: number;
  total: number;
}
