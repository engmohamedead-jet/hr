import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type FailureWhereInput = {
  failureDate?: DateTimeNullableFilter;
  failureReport?: StringNullableFilter;
  id?: StringFilter;
  note?: StringNullableFilter;
  serial?: IntFilter;
};
