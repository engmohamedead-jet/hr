import { Decimal } from "decimal.js";
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
  sequence: number | null;
  startTime: Decimal | null;
  stopTime: Decimal | null;
  timeEfficiency: Decimal | null;
  updatedAt: Date;
  workCenterRoutings?: Array<WorkCenterRouting>;
};
