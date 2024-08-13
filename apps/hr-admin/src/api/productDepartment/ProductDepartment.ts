import { ProductCategory } from "../productCategory/ProductCategory";
import { Product } from "../product/Product";

export type ProductDepartment = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  isDefault: boolean | null;
  name: string;
  normalizedName: string;
  note: string | null;
  productCategories?: Array<ProductCategory>;
  products?: Array<Product>;
  updatedAt: Date;
};
