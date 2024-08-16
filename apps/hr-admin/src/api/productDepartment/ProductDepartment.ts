import { Product } from "../product/Product";

export type ProductDepartment = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  isDefault: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  parentProductDepartment?: ProductDepartment | null;
  productDepartments?: Array<ProductDepartment>;
  products?: Array<Product>;
  updatedAt: Date;
};
