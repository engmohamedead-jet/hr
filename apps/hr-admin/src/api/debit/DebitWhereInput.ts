import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DebitWhereInput = {
  amountTotal?: DecimalNullableFilter;
  contractDate?: DateTimeNullableFilter;
  contractNumber?: StringNullableFilter;
  firstShare?: DecimalNullableFilter;
  fourthShare?: DecimalNullableFilter;
  id?: StringFilter;
  note?: StringNullableFilter;
  paidTotal?: DecimalNullableFilter;
  remaining?: DecimalNullableFilter;
  secondShare?: DecimalNullableFilter;
  thirdShare?: DecimalNullableFilter;
};
