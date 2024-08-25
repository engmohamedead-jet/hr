import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { Decimal } from "decimal.js";
import { WorkCenterWhereUniqueInput } from "../workCenter/WorkCenterWhereUniqueInput";

export type WorkCenterRoutingCreateInput = {
  billOfMaterialId?: string | null;
  code?: string | null;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  sequence: number;
  tenant?: TenantWhereUniqueInput | null;
  timeCycleManual?: Decimal | null;
  timeModeBatch?: number | null;
  workCenterId: WorkCenterWhereUniqueInput;
};
