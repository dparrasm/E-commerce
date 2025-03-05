import { Price } from "../valueObjects/Price";
export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  stock: number;
  price: Price;
}
