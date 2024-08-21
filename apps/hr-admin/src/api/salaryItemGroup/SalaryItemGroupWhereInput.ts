import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { SalaryItemListRelationFilter } from "../salaryItem/SalaryItemListRelationFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SalaryItemGroupWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  salaryItems?: SalaryItemListRelationFilter;
  tenantId?: TenantWhereUniqueInput;
};
