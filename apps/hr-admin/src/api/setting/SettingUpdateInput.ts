import { SettingGroupWhereUniqueInput } from "../settingGroup/SettingGroupWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SettingUpdateInput = {
  code?: string | null;
  isActive?: boolean;
  isEnabled?: boolean;
  isSystem?: boolean;
  key?: string;
  note?: string | null;
  settingGroup?: SettingGroupWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  value?: string;
};
