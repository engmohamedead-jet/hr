import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { ProductGroupListRelationFilter } from "../productGroup/ProductGroupListRelationFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SaleTaxWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  productGroups?: ProductGroupListRelationFilter;
  products?: ProductListRelationFilter;
  tenantId?: TenantWhereUniqueInput;
};
