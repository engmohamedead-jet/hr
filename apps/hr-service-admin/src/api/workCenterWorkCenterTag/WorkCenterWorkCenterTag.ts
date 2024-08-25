import { Tenant } from "../tenant/Tenant";
import { WorkCenter } from "../workCenter/WorkCenter";
import { WorkCenterTag } from "../workCenterTag/WorkCenterTag";

export type WorkCenterWorkCenterTag = {
  createdAt: Date;
  id: string;
  isActive: boolean;
  note: string | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
  workCenter?: WorkCenter;
  workCenterTagId?: WorkCenterTag;
};
