import { StoreUpdateManyWithoutStoreTypesInput } from "./StoreUpdateManyWithoutStoreTypesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type StoreTypeUpdateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean;
  isDefault?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  stores?: StoreUpdateManyWithoutStoreTypesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
