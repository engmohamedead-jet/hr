import { DecimalFilter } from "../../util/DecimalFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { VoucherTypeWhereUniqueInput } from "../voucherType/VoucherTypeWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ReceiptVoucherWhereInput = {
  amount?: DecimalFilter;
  chequeDueDate?: DateTimeNullableFilter;
  chequeNumber?: StringNullableFilter;
  chequeValue?: DecimalNullableFilter;
  id?: StringFilter;
  note?: StringNullableFilter;
  receiptVoucherDate?: DateTimeFilter;
  serialNumber?: StringNullableFilter;
  statementReference?: StringNullableFilter;
  voucherTypeId?: VoucherTypeWhereUniqueInput;
  wasChequePaid?: BooleanNullableFilter;
};
