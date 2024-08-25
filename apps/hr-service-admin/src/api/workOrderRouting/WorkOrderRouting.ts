import { Decimal } from "decimal.js";
import { Tenant } from "../tenant/Tenant";
import { WorkOrder } from "../workOrder/WorkOrder";

export type WorkOrderRouting = {
  actualCost: Decimal | null;
  actualEndDate: Date | null;
  actualResourceHours: Decimal | null;
  actualStartDate: Date | null;
  createdAt: Date;
  id: string;
  isActive: boolean | null;
  note: string | null;
  plannedCost: Decimal | null;
  scheduledEndDate: Date | null;
  scheduledStartDate: Date | null;
  sequence: number | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
  workOrderId?: WorkOrder;
};
