import { Decimal } from "decimal.js";
import { EmployeeClassWhereUniqueInput } from "../employeeClass/EmployeeClassWhereUniqueInput";
import { EmployeeDepartmentWhereUniqueInput } from "../employeeDepartment/EmployeeDepartmentWhereUniqueInput";
import { PaymentVoucherUpdateManyWithoutEmployeesInput } from "./PaymentVoucherUpdateManyWithoutEmployeesInput";
import { ReceiptVoucherUpdateManyWithoutEmployeesInput } from "./ReceiptVoucherUpdateManyWithoutEmployeesInput";
import { SalePersonUpdateManyWithoutEmployeesInput } from "./SalePersonUpdateManyWithoutEmployeesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type EmployeeUpdateInput = {
  balance?: Decimal | null;
  code?: string | null;
  employeeClassId?: EmployeeClassWhereUniqueInput | null;
  employeeDepartmentId?: EmployeeDepartmentWhereUniqueInput | null;
  isActive?: boolean;
  lastYearBalance?: Decimal | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  paymentVouchers?: PaymentVoucherUpdateManyWithoutEmployeesInput;
  receiptVouchers?: ReceiptVoucherUpdateManyWithoutEmployeesInput;
  remainingBalance?: Decimal | null;
  salePeople?: SalePersonUpdateManyWithoutEmployeesInput;
  tenantId?: TenantWhereUniqueInput | null;
  usedBalance?: Decimal | null;
};
