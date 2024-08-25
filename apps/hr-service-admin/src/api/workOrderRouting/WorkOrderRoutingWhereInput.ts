import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { WorkOrderWhereUniqueInput } from "../workOrder/WorkOrderWhereUniqueInput";

export type WorkOrderRoutingWhereInput = {
  actualCost?: DecimalNullableFilter;
  actualEndDate?: DateTimeNullableFilter;
  actualResourceHours?: DecimalNullableFilter;
  actualStartDate?: DateTimeNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  note?: StringNullableFilter;
  plannedCost?: DecimalNullableFilter;
  scheduledEndDate?: DateTimeNullableFilter;
  scheduledStartDate?: DateTimeNullableFilter;
  sequence?: IntNullableFilter;
  tenantId?: TenantWhereUniqueInput;
  workOrderId?: WorkOrderWhereUniqueInput;
};
