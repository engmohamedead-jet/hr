import { SettingGroup } from "../settingGroup/SettingGroup";
import { Tenant } from "../tenant/Tenant";

export type Setting = {
  code: string | null;
  createdAt: Date;
  id: string;
  isActive: boolean;
  isEnabled: boolean;
  isSystem: boolean;
  key: string;
  note: string | null;
  settingGroup?: SettingGroup | null;
  tenant?: Tenant | null;
  updatedAt: Date;
  value: string;
};
