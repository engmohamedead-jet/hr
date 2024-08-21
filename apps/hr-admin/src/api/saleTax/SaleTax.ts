import { ProductGroup } from "../productGroup/ProductGroup";
import { Product } from "../product/Product";
import { Tenant } from "../tenant/Tenant";

export type SaleTax = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  productGroups?: Array<ProductGroup>;
  products?: Array<Product>;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
