import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeClassWhereUniqueInput } from "../employeeClass/EmployeeClassWhereUniqueInput";
import { EmployeeDepartmentWhereUniqueInput } from "../employeeDepartment/EmployeeDepartmentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { PaymentVoucherListRelationFilter } from "../paymentVoucher/PaymentVoucherListRelationFilter";
import { ReceiptVoucherListRelationFilter } from "../receiptVoucher/ReceiptVoucherListRelationFilter";
import { SalePersonListRelationFilter } from "../salePerson/SalePersonListRelationFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type EmployeeWhereInput = {
  balance?: DecimalNullableFilter;
  code?: StringNullableFilter;
  employeeClassId?: EmployeeClassWhereUniqueInput;
  employeeDepartmentId?: EmployeeDepartmentWhereUniqueInput;
  id?: StringFilter;
  isActive?: BooleanFilter;
  lastYearBalance?: DecimalNullableFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  paymentVouchers?: PaymentVoucherListRelationFilter;
  receiptVouchers?: ReceiptVoucherListRelationFilter;
  remainingBalance?: DecimalNullableFilter;
  salePeople?: SalePersonListRelationFilter;
  tenantId?: TenantWhereUniqueInput;
  usedBalance?: DecimalNullableFilter;
};
