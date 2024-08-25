import { WorkCenterWhereUniqueInput } from "../workCenter/WorkCenterWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type WorkCenterAlternativeUpdateInput = {
  alternativeWorkCenterId?: WorkCenterWhereUniqueInput;
  isActive?: boolean | null;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
  workCenterId?: WorkCenterWhereUniqueInput;
};
