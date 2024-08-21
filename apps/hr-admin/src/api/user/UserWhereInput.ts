import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type UserWhereInput = {
  email?: StringFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  lastName?: StringNullableFilter;
  tenantId?: TenantWhereUniqueInput;
  username?: StringFilter;
};
