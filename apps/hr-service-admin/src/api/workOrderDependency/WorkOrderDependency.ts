import { WorkOrder } from "../workOrder/WorkOrder";
import { Tenant } from "../tenant/Tenant";

export type WorkOrderDependency = {
  blockedByWorkOrderId?: WorkOrder;
  createdAt: Date;
  id: string;
  isActive: boolean;
  note: string | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
  workOrderId?: WorkOrder | null;
};
