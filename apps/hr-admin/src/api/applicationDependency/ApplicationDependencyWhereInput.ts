import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ApplicationDependencyWhereInput = {
  applicationId?: ApplicationWhereUniqueInput;
  code?: StringNullableFilter;
  dependsOnApplicationId?: ApplicationListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  tenantId?: TenantWhereUniqueInput;
};
