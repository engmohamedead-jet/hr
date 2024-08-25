import { WorkOrderWhereUniqueInput } from "../workOrder/WorkOrderWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type WorkOrderDependencyWhereInput = {
  blockedByWorkOrderId?: WorkOrderWhereUniqueInput;
  id?: StringFilter;
  isActive?: BooleanFilter;
  note?: StringNullableFilter;
  tenantId?: TenantWhereUniqueInput;
  workOrderId?: WorkOrderWhereUniqueInput;
};
