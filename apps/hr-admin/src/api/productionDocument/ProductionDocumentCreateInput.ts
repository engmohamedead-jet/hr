import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ProductionDocumentCreateInput = {
  isActive: boolean;
  note?: string | null;
  priority?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
