import { SettingGroupWhereInput } from "./SettingGroupWhereInput";
import { SettingGroupOrderByInput } from "./SettingGroupOrderByInput";

export type SettingGroupFindManyArgs = {
  where?: SettingGroupWhereInput;
  orderBy?: Array<SettingGroupOrderByInput>;
  skip?: number;
  take?: number;
};
