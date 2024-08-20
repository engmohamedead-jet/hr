import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ShiftWhereInput = {
  code?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  id?: IntFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  nameNormalizedName?: StringFilter;
  note?: StringNullableFilter;
  startTime?: DateTimeFilter;
  tenantid?: TenantWhereUniqueInput;
};
