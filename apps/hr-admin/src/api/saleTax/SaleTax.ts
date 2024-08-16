import { ProductGroup } from "../productGroup/ProductGroup";
import { Product } from "../product/Product";

export type SaleTax = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string;
  normalizedName: string;
  note: string | null;
  productGroups?: Array<ProductGroup>;
  products?: Array<Product>;
  updatedAt: Date;
};
