import { AccountTransactionWhereUniqueInput } from "../accountTransaction/AccountTransactionWhereUniqueInput";
import { Decimal } from "decimal.js";
import { CashRepositoryWhereUniqueInput } from "../cashRepository/CashRepositoryWhereUniqueInput";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { VoucherTypeWhereUniqueInput } from "../voucherType/VoucherTypeWhereUniqueInput";

export type ReceiptVoucherUpdateInput = {
  accountTransactionId?: AccountTransactionWhereUniqueInput | null;
  amount?: Decimal;
  cashRepositoryId?: CashRepositoryWhereUniqueInput;
  chequeDueDate?: Date | null;
  chequeNumber?: string | null;
  chequeValue?: string | null;
  currencyId?: CurrencyWhereUniqueInput | null;
  customerId?: CustomerWhereUniqueInput | null;
  employeeId?: EmployeeWhereUniqueInput | null;
  isAcive?: boolean;
  note?: string | null;
  receiptVoucherDate?: Date;
  sequence?: string | null;
  statementReference?: string | null;
  tenant?: TenantWhereUniqueInput | null;
  voucherTypeId?: VoucherTypeWhereUniqueInput;
  wasChequePaid?: boolean;
};
