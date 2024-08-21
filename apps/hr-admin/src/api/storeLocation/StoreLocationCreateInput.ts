import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type StoreLocationCreateInput = {
  code?: string | null;
  createdAtSide: "Server" | "Client";
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  storeId: StoreWhereUniqueInput;
  tenantId?: TenantWhereUniqueInput | null;
};
