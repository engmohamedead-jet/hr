import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ProductionDocumentWhereInput = {
  id?: StringFilter;
  isActive?: BooleanFilter;
  note?: StringNullableFilter;
  priority?: StringNullableFilter;
  tenantId?: TenantWhereUniqueInput;
};
