import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { SalePersonListRelationFilter } from "../salePerson/SalePersonListRelationFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SaleTeamWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringNullableFilter;
  note?: StringNullableFilter;
  salePeople?: SalePersonListRelationFilter;
  tenantId?: TenantWhereUniqueInput;
};
