import { BillOfMaterialDetail } from "../billOfMaterialDetail/BillOfMaterialDetail";
import { Tenant } from "../tenant/Tenant";
import { Decimal } from "decimal.js";
import { WorkCenter } from "../workCenter/WorkCenter";

export type WorkCenterRouting = {
  billOfMaterialDetails?: Array<BillOfMaterialDetail>;
  code: string | null;
  createdAt: Date;
  id: string;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  sequence: number;
  tenantId?: Tenant | null;
  timeCycleManual: Decimal | null;
  timeModeBatch: number | null;
  updatedAt: Date;
  workCenterId?: WorkCenter | null;
};
