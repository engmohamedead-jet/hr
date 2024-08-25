import { BonusRequestWhereUniqueInput } from "../bonusRequest/BonusRequestWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type FiscalMonthWhereInput = {
  bonusRequests?: BonusRequestWhereUniqueInput;
  code?: StringNullableFilter;
  endsOn?: DateTimeFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  startsFrom?: DateTimeFilter;
  tenantId?: TenantWhereUniqueInput;
};
