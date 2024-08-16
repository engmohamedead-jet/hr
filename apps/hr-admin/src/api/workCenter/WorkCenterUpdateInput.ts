import { Decimal } from "decimal.js";
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
  sequence?: number | null;
  startTime?: Decimal | null;
  stopTime?: Decimal | null;
  timeEfficiency?: Decimal | null;
  workCenterRoutings?: WorkCenterRoutingUpdateManyWithoutWorkCentersInput;
};
