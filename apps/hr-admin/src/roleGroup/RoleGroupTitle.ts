import { RoleGroup as TRoleGroup } from "../api/roleGroup/RoleGroup";

export const ROLEGROUP_TITLE_FIELD = "name";

export const RoleGroupTitle = (record: TRoleGroup): string => {
  return record.name?.toString() || String(record.id);
};
