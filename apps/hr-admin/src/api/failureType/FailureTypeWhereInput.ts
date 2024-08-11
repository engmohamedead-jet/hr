import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FailureReportingListRelationFilter } from "../failureReporting/FailureReportingListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type FailureTypeWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  failureReportings?: FailureReportingListRelationFilter;
  id?: IntFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  notes?: StringNullableFilter;
};
