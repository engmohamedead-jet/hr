import { SettingGroup as TSettingGroup } from "../api/settingGroup/SettingGroup";

export const SETTINGGROUP_TITLE_FIELD = "name";

export const SettingGroupTitle = (record: TSettingGroup): string => {
  return record.name?.toString() || String(record.id);
};
