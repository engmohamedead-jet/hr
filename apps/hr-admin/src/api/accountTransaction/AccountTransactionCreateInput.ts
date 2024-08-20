import { PaymentVoucherCreateNestedManyWithoutAccountTransactionsInput } from "./PaymentVoucherCreateNestedManyWithoutAccountTransactionsInput";
import { ReceiptVoucherWhereUniqueInput } from "../receiptVoucher/ReceiptVoucherWhereUniqueInput";

export type AccountTransactionCreateInput = {
  code?: string | null;
  name?: string | null;
  paymentVouchers?: PaymentVoucherCreateNestedManyWithoutAccountTransactionsInput;
  receiptVouchers?: ReceiptVoucherWhereUniqueInput | null;
};
