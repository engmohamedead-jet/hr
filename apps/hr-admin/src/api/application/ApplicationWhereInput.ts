import { ApplicationDependencyWhereUniqueInput } from "../applicationDependency/ApplicationDependencyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ApplicationWhereInput = {
  DependsOnApplicationDependency?: ApplicationDependencyWhereUniqueInput;
  applicationDependency?: ApplicationDependencyWhereUniqueInput;
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  i18nKey?: StringFilter;
  icon?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  landingUrl?: StringNullableFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  publishedDateTime?: DateTimeNullableFilter;
  publisher?: StringNullableFilter;
  tenantId?: TenantWhereUniqueInput;
  versionNumber?: StringFilter;
};
