import { Setting as TSetting } from "../api/setting/Setting";

export const SETTING_TITLE_FIELD = "code";

export const SettingTitle = (record: TSetting): string => {
  return record.code?.toString() || String(record.id);
};
