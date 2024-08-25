import { WorkOrderWhereUniqueInput } from "../workOrder/WorkOrderWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type WorkOrderDependencyUpdateInput = {
  blockedByWorkOrderId?: WorkOrderWhereUniqueInput;
  isActive?: boolean;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
  workOrderId?: WorkOrderWhereUniqueInput | null;
};
