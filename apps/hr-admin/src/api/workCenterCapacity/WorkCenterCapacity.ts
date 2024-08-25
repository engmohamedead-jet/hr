import { Decimal } from "decimal.js";
import { Tenant } from "../tenant/Tenant";
import { WorkCenter } from "../workCenter/WorkCenter";

export type WorkCenterCapacity = {
  capacity: Decimal;
  createdAt: Date;
  id: string;
  isActive: boolean;
  note: string | null;
  startTime: Decimal | null;
  stopTime: Decimal | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
  workCenterId?: WorkCenter;
};
