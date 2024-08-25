import { Tenant } from "../tenant/Tenant";
import { WorkCenterWorkCenterTag } from "../workCenterWorkCenterTag/WorkCenterWorkCenterTag";

export type WorkCenterTag = {
  Desciption: string | null;
  code: string | null;
  color: number | null;
  createdAt: Date;
  id: string;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
  workCenterWorkCenterTags?: Array<WorkCenterWorkCenterTag>;
};
