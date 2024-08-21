import { Store } from "../store/Store";
import { Tenant } from "../tenant/Tenant";

export type StoreLocation = {
  code: string | null;
  createdAt: Date;
  createdAtSide?: "Server" | "Client";
  id: string;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  storeId?: Store;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
