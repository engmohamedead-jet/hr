import { AdminRole as TAdminRole } from "../api/adminRole/AdminRole";

export const ADMINROLE_TITLE_FIELD = "id";

export const AdminRoleTitle = (record: TAdminRole): string => {
  return record.id?.toString() || String(record.id);
};
