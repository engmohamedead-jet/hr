import { Product } from "../product/Product";
import { Tenant } from "../tenant/Tenant";

export type ProductType = {
  code: string | null;
  createdAt: Date;
  id: number;
  isActive: boolean;
  isComponent: boolean | null;
  name: string;
  normalizedName: string;
  note: string | null;
  products?: Array<Product>;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
