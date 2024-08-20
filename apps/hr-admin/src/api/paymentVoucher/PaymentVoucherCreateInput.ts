import { AccountTransactionWhereUniqueInput } from "../accountTransaction/AccountTransactionWhereUniqueInput";
import { Decimal } from "decimal.js";
import { CashRepositoryWhereUniqueInput } from "../cashRepository/CashRepositoryWhereUniqueInput";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { ExpenseItemWhereUniqueInput } from "../expenseItem/ExpenseItemWhereUniqueInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { VoucherTypeWhereUniqueInput } from "../voucherType/VoucherTypeWhereUniqueInput";

export type PaymentVoucherCreateInput = {
  accountTransactionId?: AccountTransactionWhereUniqueInput | null;
  amount?: Decimal | null;
  cashRepositoryId: CashRepositoryWhereUniqueInput;
  currency: CurrencyWhereUniqueInput;
  employeeId?: EmployeeWhereUniqueInput | null;
  expenseItemId?: ExpenseItemWhereUniqueInput | null;
  isActive: boolean;
  note?: string | null;
  paymentVoucherDate: Date;
  statementReference?: string | null;
  supplier?: SupplierWhereUniqueInput | null;
  tenantId?: TenantWhereUniqueInput | null;
  voucherTypeId?: VoucherTypeWhereUniqueInput | null;
};
