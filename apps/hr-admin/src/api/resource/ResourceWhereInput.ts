import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { ResourceTypeWhereUniqueInput } from "../resourceType/ResourceTypeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";

export type ResourceWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  resourceTypeId?: ResourceTypeWhereUniqueInput;
  tenantId?: TenantWhereUniqueInput;
  timeEfficiency?: DecimalNullableFilter;
};
