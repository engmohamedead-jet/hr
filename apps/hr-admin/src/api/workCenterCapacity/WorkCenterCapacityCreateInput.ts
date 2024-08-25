import { Decimal } from "decimal.js";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { WorkCenterWhereUniqueInput } from "../workCenter/WorkCenterWhereUniqueInput";

export type WorkCenterCapacityCreateInput = {
  capacity: Decimal;
  isActive: boolean;
  note?: string | null;
  startTime?: Decimal | null;
  stopTime?: Decimal | null;
  tenantId?: TenantWhereUniqueInput | null;
  workCenterId: WorkCenterWhereUniqueInput;
};
