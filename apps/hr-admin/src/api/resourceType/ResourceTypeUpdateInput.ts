import { ResourceUpdateManyWithoutResourceTypesInput } from "./ResourceUpdateManyWithoutResourceTypesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ResourceTypeUpdateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  resources?: ResourceUpdateManyWithoutResourceTypesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
