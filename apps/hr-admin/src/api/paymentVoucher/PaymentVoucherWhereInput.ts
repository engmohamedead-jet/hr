import { DecimalFilter } from "../../util/DecimalFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type PaymentVoucherWhereInput = {
  amount?: DecimalFilter;
  id?: StringFilter;
  note?: StringNullableFilter;
  paymentVoucherDate?: DateTimeFilter;
  statementReference?: StringNullableFilter;
};
