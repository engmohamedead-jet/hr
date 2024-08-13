import { Product } from "../product/Product";

export type ProductType = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  isComponent: boolean | null;
  name: string;
  normalizedName: string;
  note: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
