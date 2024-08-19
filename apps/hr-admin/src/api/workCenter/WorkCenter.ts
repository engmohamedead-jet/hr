import { Decimal } from "decimal.js";
import { Tenant } from "../tenant/Tenant";
import { WorkCenterRouting } from "../workCenterRouting/WorkCenterRouting";

export type WorkCenter = {
  analyticDistribution: string | null;
  code: string | null;
  color: number | null;
  costPerHour: Decimal | null;
  createdAt: Date;
  defaultCapacity: Decimal | null;
  id: number;
  isActive: boolean;
  isProductive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  oeeTareget: Decimal | null;
  sequence: number;
  startTime: Decimal | null;
  stopTime: Decimal | null;
  tenantId?: Tenant | null;
  timeEfficiency: Decimal | null;
  updatedAt: Date;
  workCenterRoutings?: Array<WorkCenterRouting>;
};
