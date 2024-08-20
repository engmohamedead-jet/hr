import { AccountTransaction } from "../accountTransaction/AccountTransaction";
import { Decimal } from "decimal.js";
import { CashRepository } from "../cashRepository/CashRepository";
import { Currency } from "../currency/Currency";
import { Employee } from "../employee/Employee";
import { ExpenseItem } from "../expenseItem/ExpenseItem";
import { Supplier } from "../supplier/Supplier";
import { Tenant } from "../tenant/Tenant";
import { VoucherType } from "../voucherType/VoucherType";

export type PaymentVoucher = {
  accountTransactionId?: AccountTransaction | null;
  amount: Decimal | null;
  cashRepositoryId?: CashRepository;
  createdAt: Date;
  currency?: Currency;
  employeeId?: Employee | null;
  expenseItemId?: ExpenseItem | null;
  id: string;
  isActive: boolean;
  note: string | null;
  paymentVoucherDate: Date;
  statementReference: string | null;
  supplier?: Supplier | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
  voucherTypeId?: VoucherType | null;
};
