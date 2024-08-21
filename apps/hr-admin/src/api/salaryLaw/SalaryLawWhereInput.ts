import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { SalaryItemListRelationFilter } from "../salaryItem/SalaryItemListRelationFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SalaryLawWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  effectiveDate?: DateTimeFilter;
  id?: IntFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  salaryItems?: SalaryItemListRelationFilter;
  tenantId?: TenantWhereUniqueInput;
};
