import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { SalaryItemGroupWhereUniqueInput } from "../salaryItemGroup/SalaryItemGroupWhereUniqueInput";
import { SalaryItemTypeWhereUniqueInput } from "../salaryItemType/SalaryItemTypeWhereUniqueInput";
import { SalaryLawWhereUniqueInput } from "../salaryLaw/SalaryLawWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SalaryItemWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  salaryItemGroupId?: SalaryItemGroupWhereUniqueInput;
  salaryItemTypeId?: SalaryItemTypeWhereUniqueInput;
  salaryLawId?: SalaryLawWhereUniqueInput;
  tenantId?: TenantWhereUniqueInput;
};
