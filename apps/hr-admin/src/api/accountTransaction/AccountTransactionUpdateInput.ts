import { PaymentVoucherUpdateManyWithoutAccountTransactionsInput } from "./PaymentVoucherUpdateManyWithoutAccountTransactionsInput";
import { ReceiptVoucherWhereUniqueInput } from "../receiptVoucher/ReceiptVoucherWhereUniqueInput";

export type AccountTransactionUpdateInput = {
  code?: string | null;
  name?: string | null;
  paymentVouchers?: PaymentVoucherUpdateManyWithoutAccountTransactionsInput;
  receiptVouchers?: ReceiptVoucherWhereUniqueInput | null;
};
