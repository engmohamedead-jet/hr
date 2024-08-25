import { Tenant } from "../tenant/Tenant";
import { Decimal } from "decimal.js";
import { WorkCenter } from "../workCenter/WorkCenter";

export type WorkCenterRouting = {
  billOfMaterialId: string | null;
  code: string | null;
  createdAt: Date;
  id: string;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  sequence: number;
  tenant?: Tenant | null;
  timeCycleManual: Decimal | null;
  timeModeBatch: number | null;
  updatedAt: Date;
  workCenterId?: WorkCenter;
};
