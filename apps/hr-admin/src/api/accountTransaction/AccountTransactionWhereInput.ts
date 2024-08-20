import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentVoucherListRelationFilter } from "../paymentVoucher/PaymentVoucherListRelationFilter";
import { ReceiptVoucherWhereUniqueInput } from "../receiptVoucher/ReceiptVoucherWhereUniqueInput";

export type AccountTransactionWhereInput = {
  code?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  paymentVouchers?: PaymentVoucherListRelationFilter;
  receiptVouchers?: ReceiptVoucherWhereUniqueInput;
};
