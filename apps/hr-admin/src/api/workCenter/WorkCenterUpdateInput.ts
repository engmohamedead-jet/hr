import { Decimal } from "decimal.js";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { WorkCenterAlternativeUpdateManyWithoutWorkCentersInput } from "./WorkCenterAlternativeUpdateManyWithoutWorkCentersInput";
import { WorkCenterCapacityUpdateManyWithoutWorkCentersInput } from "./WorkCenterCapacityUpdateManyWithoutWorkCentersInput";
import { WorkCenterProductivityUpdateManyWithoutWorkCentersInput } from "./WorkCenterProductivityUpdateManyWithoutWorkCentersInput";
import { WorkCenterProductivityLossUpdateManyWithoutWorkCentersInput } from "./WorkCenterProductivityLossUpdateManyWithoutWorkCentersInput";
import { WorkCenterRoutingUpdateManyWithoutWorkCentersInput } from "./WorkCenterRoutingUpdateManyWithoutWorkCentersInput";
import { WorkCenterWorkCenterTagUpdateManyWithoutWorkCentersInput } from "./WorkCenterWorkCenterTagUpdateManyWithoutWorkCentersInput";

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
  workCenterAlternativeWorkCenters?: WorkCenterAlternativeUpdateManyWithoutWorkCentersInput;
  workCenterAlternatives?: WorkCenterAlternativeUpdateManyWithoutWorkCentersInput;
  workCenterCapacities?: WorkCenterCapacityUpdateManyWithoutWorkCentersInput;
  workCenterProductivities?: WorkCenterProductivityUpdateManyWithoutWorkCentersInput;
  workCenterProductivityLosses?: WorkCenterProductivityLossUpdateManyWithoutWorkCentersInput;
  workCenterRoutings?: WorkCenterRoutingUpdateManyWithoutWorkCentersInput;
  workCenterWorkCenterTags?: WorkCenterWorkCenterTagUpdateManyWithoutWorkCentersInput;
};
