import { Tenant } from "../tenant/Tenant";
import { WorkOrder } from "../workOrder/WorkOrder";

export type ScrapReason = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
  workOrders?: Array<WorkOrder>;
};
