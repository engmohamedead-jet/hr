import { ResourceTypeWhereUniqueInput } from "../resourceType/ResourceTypeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { Decimal } from "decimal.js";

export type ResourceUpdateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  resourceTypeId?: ResourceTypeWhereUniqueInput | null;
  tenantId?: TenantWhereUniqueInput | null;
  timeEfficiency?: Decimal | null;
};
