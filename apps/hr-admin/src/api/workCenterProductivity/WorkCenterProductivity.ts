import { Decimal } from "decimal.js";
import { Tenant } from "../tenant/Tenant";
import { WorkCenter } from "../workCenter/WorkCenter";

export type WorkCenterProductivity = {
  createdAt: Date;
  description: string | null;
  duration: Decimal | null;
  endDate: Date | null;
  id: string;
  isActive: boolean;
  note: string | null;
  startDate: Date | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
  workCenterId?: WorkCenter | null;
};
