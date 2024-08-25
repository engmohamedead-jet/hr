import { Decimal } from "decimal.js";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { WorkOrderWhereUniqueInput } from "../workOrder/WorkOrderWhereUniqueInput";

export type WorkOrderRoutingCreateInput = {
  actualCost?: Decimal | null;
  actualEndDate?: Date | null;
  actualResourceHours?: Decimal | null;
  actualStartDate?: Date | null;
  isActive?: boolean | null;
  note?: string | null;
  plannedCost?: Decimal | null;
  scheduledEndDate?: Date | null;
  scheduledStartDate?: Date | null;
  sequence?: number | null;
  tenantId?: TenantWhereUniqueInput | null;
  workOrderId: WorkOrderWhereUniqueInput;
};
