import { BillOfMaterialDetailUpdateManyWithoutWorkCenterRoutingsInput } from "./BillOfMaterialDetailUpdateManyWithoutWorkCenterRoutingsInput";
import { Decimal } from "decimal.js";
import { WorkCenterWhereUniqueInput } from "../workCenter/WorkCenterWhereUniqueInput";

export type WorkCenterRoutingUpdateInput = {
  billOfMaterialDetails?: BillOfMaterialDetailUpdateManyWithoutWorkCenterRoutingsInput;
  code?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  sequence?: number | null;
  timeCycleManual?: Decimal | null;
  timeModeBatch?: number | null;
  workCenter?: WorkCenterWhereUniqueInput | null;
};
