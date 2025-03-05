import { Product } from "@domain/entities/Product";
import { IProductRepository } from "@domain/repositories/IProductRepository";
import { ProductResponse } from "../api/types/ProductResponse";
import { ProductMapper } from "../mappers/ProductMapper";

export class ProductRepository implements IProductRepository {
  private products: ProductResponse[] = [];

  async findAll(): Promise<Product[]> {
    // Aquí iría la llamada real a la API
    return this.products.map(ProductMapper.toDomain);
  }

  async findById(id: string): Promise<Product | undefined> {
    const product = this.products.find((p) => p.product_id === id);
    return product ? ProductMapper.toDomain(product) : undefined;
  }

  async findByName(name: string): Promise<Product[]> {
    return this.products
      .filter((product) => product.product_name.includes(name))
      .map(ProductMapper.toDomain);
  }
}
