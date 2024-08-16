import { Product } from "../product/Product";

export type ProductType = {
  code: string | null;
  createdAt: Date;
  id: number;
  isComponent: boolean | null;
  name: string;
  normalizedName: string;
  note: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
