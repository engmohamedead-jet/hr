import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { WorkCenterWhereUniqueInput } from "../workCenter/WorkCenterWhereUniqueInput";
import { WorkCenterProductivityLossTypeWhereUniqueInput } from "../workCenterProductivityLossType/WorkCenterProductivityLossTypeWhereUniqueInput";

export type WorkCenterProductivityLossCreateInput = {
  code?: string | null;
  isActive: boolean;
  isManual: boolean;
  lossType?: "Availability" | "Perfomance" | "Quality" | "Productive" | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  sequence?: number | null;
  tenantId?: TenantWhereUniqueInput | null;
  workCenterId?: WorkCenterWhereUniqueInput | null;
  workCenterProductivityLossTypeI: WorkCenterProductivityLossTypeWhereUniqueInput;
};
