import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type WorkOrderStatusUpdateInput = {
  code?: string | null;
  isActive?: boolean | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
