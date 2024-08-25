import { Tenant } from "../tenant/Tenant";
import { WorkCenter } from "../workCenter/WorkCenter";
import { WorkCenterProductivityLossType } from "../workCenterProductivityLossType/WorkCenterProductivityLossType";

export type WorkCenterProductivityLoss = {
  code: string | null;
  createdAt: Date;
  id: string;
  isActive: boolean;
  isManual: boolean;
  lossType?: "Availability" | "Perfomance" | "Quality" | "Productive" | null;
  name: string;
  normalizedName: string;
  note: string | null;
  sequence: number | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
  workCenterId?: WorkCenter | null;
  workCenterProductivityLossTypeI?: WorkCenterProductivityLossType;
};
