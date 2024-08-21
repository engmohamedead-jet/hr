import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ProductionAvailabilityUpdateInput = {
  code?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  tenantIId?: TenantWhereUniqueInput | null;
};
