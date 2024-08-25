import { WorkCenter } from "../workCenter/WorkCenter";
import { Tenant } from "../tenant/Tenant";

export type WorkCenterAlternative = {
  alternativeWorkCenterId?: WorkCenter;
  createdAt: Date;
  id: string;
  isActive: boolean | null;
  note: string | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
  workCenterId?: WorkCenter;
};
