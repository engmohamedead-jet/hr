import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { FiscalMonthWhereUniqueInput } from "../fiscalMonth/FiscalMonthWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type BonusRequestWhereInput = {
  absent?: DecimalNullableFilter;
  actual?: DecimalNullableFilter;
  allStoreValue?: DecimalNullableFilter;
  annualLeave?: DecimalNullableFilter;
  approvedByUserId?: UserWhereUniqueInput;
  assistantManager?: DecimalNullableFilter;
  employee?: EmployeeWhereUniqueInput;
  finalAmount?: DecimalNullableFilter;
  fiscalMonthId?: FiscalMonthWhereUniqueInput;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  isAppreoved?: BooleanFilter;
  note?: StringNullableFilter;
  penalty?: DecimalNullableFilter;
  percentage2?: DecimalNullableFilter;
  present?: DecimalNullableFilter;
  proratedValue?: DecimalNullableFilter;
  sales?: DecimalNullableFilter;
  salesStaff?: DecimalNullableFilter;
  salesTargetPercentage?: DecimalNullableFilter;
  shopManager?: DecimalNullableFilter;
  sickLeave?: DecimalNullableFilter;
  target?: DecimalNullableFilter;
  tenantId?: TenantWhereUniqueInput;
  warning?: DecimalNullableFilter;
};