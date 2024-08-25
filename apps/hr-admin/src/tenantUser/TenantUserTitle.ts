import { TenantUser as TTenantUser } from "../api/tenantUser/TenantUser";

export const TENANTUSER_TITLE_FIELD = "id";

export const TenantUserTitle = (record: TTenantUser): string => {
  return record.id?.toString() || String(record.id);
};
