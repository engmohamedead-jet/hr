import { Decimal } from "decimal.js";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { WorkCenterWhereUniqueInput } from "../workCenter/WorkCenterWhereUniqueInput";

export type WorkCenterProductivityCreateInput = {
  description?: string | null;
  duration?: Decimal | null;
  endDate?: Date | null;
  isActive: boolean;
  note?: string | null;
  startDate?: Date | null;
  tenantId?: TenantWhereUniqueInput | null;
  workCenterId?: WorkCenterWhereUniqueInput | null;
};
