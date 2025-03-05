import { Product } from "@domain/entities/Product";
import { GetAllProducts } from "../usecases/GetAllProducts";
import { Logger } from "@infrastructure/utils/Logger";

export class ProductService {
  constructor(private getAllProducts: GetAllProducts) {}

  async getAll(options?: {
    category?: string;
    inStock?: boolean;
  }): Promise<Product[]> {
    try {
      const products = await this.getAllProducts.execute();
      return products ? this.filterProducts(products, options) : [];
    } catch (error) {
      Logger.error("Error retrieving products", error);
      throw error;
    }
  }

  private filterProducts(
    products: Product[],
    options?: {
      category?: string;
      inStock?: boolean;
    },
  ): Product[] {
    let filtered = [...products];

    if (options?.category) {
      filtered = filtered.filter((p) => p.category === options.category);
    }

    if (options?.inStock) {
      filtered = filtered.filter((p) => p.stock > 0);
    }

    return filtered;
  }
}
