import { Decimal } from "decimal.js";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { WorkCenterRoutingUpdateManyWithoutWorkCentersInput } from "./WorkCenterRoutingUpdateManyWithoutWorkCentersInput";

export type WorkCenterUpdateInput = {
  analyticDistribution?: string | null;
  code?: string | null;
  color?: number | null;
  costPerHour?: Decimal | null;
  defaultCapacity?: Decimal | null;
  isActive?: boolean;
  isProductive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  oeeTareget?: Decimal | null;
  sequence?: number;
  startTime?: Decimal | null;
  stopTime?: Decimal | null;
  tenantId?: TenantWhereUniqueInput | null;
  timeEfficiency?: Decimal | null;
  workCenterRoutings?: WorkCenterRoutingUpdateManyWithoutWorkCentersInput;
};
