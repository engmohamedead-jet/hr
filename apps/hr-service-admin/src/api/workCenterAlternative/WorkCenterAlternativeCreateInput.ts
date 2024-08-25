import { WorkCenterWhereUniqueInput } from "../workCenter/WorkCenterWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type WorkCenterAlternativeCreateInput = {
  alternativeWorkCenterId: WorkCenterWhereUniqueInput;
  isActive?: boolean | null;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
  workCenterId: WorkCenterWhereUniqueInput;
};
