import { Product } from "@domain/entities/Product";
import { ProductRequest, ProductResponse } from "../api/types/product";
import { Price } from "@domain/valueObjects/Price";

export class ProductMapper {
  static toDomain(response: ProductResponse): Product {
    return {
      id: response.product_id,
      name: response.product_name,
      description: response.product_description,
      category: response.category_name,
      stock: response.stock_quantity,
      price: new Price(response.unit_price, response.currency_code),
    };
  }

  static toRequest(domain: Product): ProductRequest {
    return {
      product_id: domain.id,
      product_name: domain.name,
      product_description: domain.description,
      category_name: domain.category,
      stock_quantity: domain.stock,
      unit_price: domain.price.getAmount(),
      currency_code: domain.price.getCurrency(),
    };
  }
}
