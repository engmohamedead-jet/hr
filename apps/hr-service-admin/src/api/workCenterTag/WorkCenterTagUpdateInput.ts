import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { WorkCenterWorkCenterTagUpdateManyWithoutWorkCenterTagsInput } from "./WorkCenterWorkCenterTagUpdateManyWithoutWorkCenterTagsInput";

export type WorkCenterTagUpdateInput = {
  Desciption?: string | null;
  code?: string | null;
  color?: number | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
  workCenterWorkCenterTags?: WorkCenterWorkCenterTagUpdateManyWithoutWorkCenterTagsInput;
};
