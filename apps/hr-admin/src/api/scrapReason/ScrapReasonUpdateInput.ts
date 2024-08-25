import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { WorkOrderUpdateManyWithoutScrapReasonsInput } from "./WorkOrderUpdateManyWithoutScrapReasonsInput";

export type ScrapReasonUpdateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
  workOrders?: WorkOrderUpdateManyWithoutScrapReasonsInput;
};
