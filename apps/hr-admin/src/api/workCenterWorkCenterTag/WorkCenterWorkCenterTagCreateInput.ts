import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { WorkCenterWhereUniqueInput } from "../workCenter/WorkCenterWhereUniqueInput";
import { WorkCenterTagWhereUniqueInput } from "../workCenterTag/WorkCenterTagWhereUniqueInput";

export type WorkCenterWorkCenterTagCreateInput = {
  isActive: boolean;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
  workCenter: WorkCenterWhereUniqueInput;
  workCenterTagId: WorkCenterTagWhereUniqueInput;
};
