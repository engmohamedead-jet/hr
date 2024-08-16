import { Product } from "../product/Product";

export type ProductCategory = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  isDefault: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
