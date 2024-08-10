import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FiscalMonthWhereUniqueInput } from "../fiscalMonth/FiscalMonthWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type FiscalWeekWhereInput = {
  code?: StringNullableFilter;
  endsOn?: StringNullableFilter;
  fiscalMonthId?: FiscalMonthWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  normalizedName?: StringNullableFilter;
  note?: StringNullableFilter;
  startsFrom?: StringNullableFilter;
};
