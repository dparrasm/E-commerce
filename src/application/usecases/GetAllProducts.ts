import { ProductRepository } from "./../../infrastructure/data/ProductRepository";
import { Product } from "@domain/entities/Product";

export class GetAllProducts {
  constructor(private productRepository: ProductRepository) {}

  async execute(): Promise<Product[]> {
    const products = await this.productRepository.findAll();
    return products;
  }
}
