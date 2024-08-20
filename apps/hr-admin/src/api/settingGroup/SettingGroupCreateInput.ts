import { SettingCreateNestedManyWithoutSettingGroupsInput } from "./SettingCreateNestedManyWithoutSettingGroupsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SettingGroupCreateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  settings?: SettingCreateNestedManyWithoutSettingGroupsInput;
  tenant?: TenantWhereUniqueInput | null;
};
