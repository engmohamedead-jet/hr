import { Store } from "../store/Store";
import { Tenant } from "../tenant/Tenant";

export type StoreType = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  isActive: boolean;
  isDefault: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  stores?: Array<Store>;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
