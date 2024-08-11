import { ProductGroup } from "../productGroup/ProductGroup";
import { Decimal } from "decimal.js";
import { Store } from "../store/Store";

export type SaleTax = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  isExemption: boolean | null;
  name: string;
  normalizedName: string;
  note: string | null;
  productGroups?: Array<ProductGroup>;
  rate: Decimal | null;
  store?: Store | null;
  updatedAt: Date;
};
