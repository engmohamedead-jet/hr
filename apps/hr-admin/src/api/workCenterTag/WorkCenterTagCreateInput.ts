import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { WorkCenterWorkCenterTagCreateNestedManyWithoutWorkCenterTagsInput } from "./WorkCenterWorkCenterTagCreateNestedManyWithoutWorkCenterTagsInput";

export type WorkCenterTagCreateInput = {
  Desciption?: string | null;
  code?: string | null;
  color?: number | null;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
  workCenterWorkCenterTags?: WorkCenterWorkCenterTagCreateNestedManyWithoutWorkCenterTagsInput;
};
