import { ResourceCreateNestedManyWithoutResourceTypesInput } from "./ResourceCreateNestedManyWithoutResourceTypesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ResourceTypeCreateInput = {
  code?: string | null;
  description?: string | null;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  resources?: ResourceCreateNestedManyWithoutResourceTypesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
