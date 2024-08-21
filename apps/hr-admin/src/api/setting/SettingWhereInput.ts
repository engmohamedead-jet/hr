import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { SettingGroupWhereUniqueInput } from "../settingGroup/SettingGroupWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SettingWhereInput = {
  code?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  isEnabled?: BooleanFilter;
  isSystem?: BooleanFilter;
  key?: StringFilter;
  note?: StringNullableFilter;
  settingGroup?: SettingGroupWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  value?: StringFilter;
};
