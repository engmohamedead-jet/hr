import { Product } from "../product/Product";
import { Tenant } from "../tenant/Tenant";

export type ProductCategory = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  isActive: boolean;
  isDefault: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  products?: Array<Product>;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
