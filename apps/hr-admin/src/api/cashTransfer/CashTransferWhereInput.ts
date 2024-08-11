import { DecimalFilter } from "../../util/DecimalFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type CashTransferWhereInput = {
  amount?: DecimalFilter;
  id?: StringFilter;
  note?: StringNullableFilter;
  referenceNumber?: StringNullableFilter;
  statementReference?: StringNullableFilter;
  transferDate?: DateTimeFilter;
};
