import { Decimal } from "decimal.js";
import { EmployeeClassWhereUniqueInput } from "../employeeClass/EmployeeClassWhereUniqueInput";
import { EmployeeDepartmentWhereUniqueInput } from "../employeeDepartment/EmployeeDepartmentWhereUniqueInput";
import { PaymentVoucherCreateNestedManyWithoutEmployeesInput } from "./PaymentVoucherCreateNestedManyWithoutEmployeesInput";
import { ReceiptVoucherCreateNestedManyWithoutEmployeesInput } from "./ReceiptVoucherCreateNestedManyWithoutEmployeesInput";
import { SalePersonCreateNestedManyWithoutEmployeesInput } from "./SalePersonCreateNestedManyWithoutEmployeesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type EmployeeCreateInput = {
  balance?: Decimal | null;
  code?: string | null;
  employeeClassId?: EmployeeClassWhereUniqueInput | null;
  employeeDepartmentId?: EmployeeDepartmentWhereUniqueInput | null;
  isActive: boolean;
  lastYearBalance?: Decimal | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  paymentVouchers?: PaymentVoucherCreateNestedManyWithoutEmployeesInput;
  receiptVouchers?: ReceiptVoucherCreateNestedManyWithoutEmployeesInput;
  remainingBalance?: Decimal | null;
  salePeople?: SalePersonCreateNestedManyWithoutEmployeesInput;
  tenantId?: TenantWhereUniqueInput | null;
  usedBalance?: Decimal | null;
};
