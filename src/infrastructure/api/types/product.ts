// Tipos para las respuestas de la API
export interface ProductResponse {
  product_id: string;
  product_name: string;
  product_description: string;
  category_name: string;
  stock_quantity: number;
  unit_price: number;
  currency_code: string;
}

// Tipos para las peticiones a la API
export interface ProductRequest {
  product_id: string;
  product_name: string;
  product_description: string;
  category_name: string;
  stock_quantity: number;
  unit_price: number;
  currency_code: string;
}

// Si necesitamos tipos específicos para crear o actualizar
export type CreateProductRequest = Omit<ProductRequest, "product_id">;
export type UpdateProductRequest = Partial<ProductRequest>;
