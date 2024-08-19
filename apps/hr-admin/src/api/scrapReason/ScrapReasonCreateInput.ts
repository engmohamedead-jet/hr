import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ScrapReasonCreateInput = {
  code?: string | null;
  description?: string | null;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
