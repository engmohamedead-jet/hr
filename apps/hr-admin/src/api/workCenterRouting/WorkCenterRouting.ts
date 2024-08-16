import { BillOfMaterialDetail } from "../billOfMaterialDetail/BillOfMaterialDetail";
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
  sequence: number | null;
  timeCycleManual: Decimal | null;
  timeModeBatch: number | null;
  updatedAt: Date;
  workCenter?: WorkCenter | null;
};
