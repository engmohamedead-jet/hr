import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { ReceiptVoucherListRelationFilter } from "../receiptVoucher/ReceiptVoucherListRelationFilter";

export type VoucherTypeWhereInput = {
  code?: StringFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  name?: StringFilter;
  normalizedName?: StringNullableFilter;
  note?: StringNullableFilter;
  receiptVouchers?: ReceiptVoucherListRelationFilter;
};
