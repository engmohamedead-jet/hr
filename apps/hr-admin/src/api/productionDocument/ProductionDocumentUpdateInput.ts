import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ProductionDocumentUpdateInput = {
  isActive?: boolean;
  note?: string | null;
  priority?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
