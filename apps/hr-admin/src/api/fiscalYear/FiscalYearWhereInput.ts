import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FiscalMonthListRelationFilter } from "../fiscalMonth/FiscalMonthListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type FiscalYearWhereInput = {
  code?: StringNullableFilter;
  endsOn?: DateTimeNullableFilter;
  fiscalMonths?: FiscalMonthListRelationFilter;
  id?: StringFilter;
  isEodRequired?: BooleanNullableFilter;
  name?: StringNullableFilter;
  normalizedName?: StringNullableFilter;
  notes?: StringNullableFilter;
  startsFrom?: DateTimeNullableFilter;
};
