export interface IProducts {
  name: string;
  brand: string;
  price: number;
  category: string[];
  description: string;
  quantity: number;
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
}