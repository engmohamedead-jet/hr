import { SettingUpdateManyWithoutSettingGroupsInput } from "./SettingUpdateManyWithoutSettingGroupsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SettingGroupUpdateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  settings?: SettingUpdateManyWithoutSettingGroupsInput;
  tenant?: TenantWhereUniqueInput | null;
};
