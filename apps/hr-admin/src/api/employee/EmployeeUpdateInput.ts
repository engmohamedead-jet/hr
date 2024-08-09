import { Decimal } from "decimal.js";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";

export type EmployeeUpdateInput = {
  balance?: Decimal | null;
  departmentId?: DepartmentWhereUniqueInput | null;
  lastYearBalance?: Decimal | null;
  name?: string | null;
  normalizedName?: string | null;
  note?: string | null;
  remainingBalance?: Decimal | null;
  usedBalance?: Decimal | null;
};
