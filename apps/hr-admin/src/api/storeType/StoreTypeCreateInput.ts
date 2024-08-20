import { StoreCreateNestedManyWithoutStoreTypesInput } from "./StoreCreateNestedManyWithoutStoreTypesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type StoreTypeCreateInput = {
  code?: string | null;
  description?: string | null;
  isActive: boolean;
  isDefault: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  stores?: StoreCreateNestedManyWithoutStoreTypesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
