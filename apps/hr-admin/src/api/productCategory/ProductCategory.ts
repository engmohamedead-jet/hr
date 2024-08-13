import { ProductDepartment } from "../productDepartment/ProductDepartment";
import { Product } from "../product/Product";

export type ProductCategory = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  isDefault: boolean | null;
  name: string | null;
  normalizedName: string | null;
  note: string | null;
  productDepartment?: ProductDepartment | null;
  products?: Array<Product>;
  updatedAt: Date;
};
