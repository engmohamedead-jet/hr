import { Decimal } from "decimal.js";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { FiscalMonthWhereUniqueInput } from "../fiscalMonth/FiscalMonthWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type BonusRequestUpdateInput = {
  absent?: Decimal | null;
  actual?: Decimal | null;
  allStoreValue?: Decimal | null;
  annualLeave?: Decimal | null;
  approvedByUserId?: UserWhereUniqueInput | null;
  assistantManager?: Decimal | null;
  employee?: EmployeeWhereUniqueInput;
  finalAmount?: Decimal | null;
  fiscalMonthId?: FiscalMonthWhereUniqueInput | null;
  isActive?: boolean | null;
  isAppreoved?: boolean;
  note?: string | null;
  penalty?: Decimal | null;
  percentage2?: Decimal | null;
  present?: Decimal | null;
  proratedValue?: Decimal | null;
  sales?: Decimal | null;
  salesStaff?: Decimal | null;
  salesTargetPercentage?: Decimal | null;
  shopManager?: Decimal | null;
  sickLeave?: Decimal | null;
  target?: Decimal | null;
  tenantId?: TenantWhereUniqueInput | null;
  warning?: Decimal | null;
};