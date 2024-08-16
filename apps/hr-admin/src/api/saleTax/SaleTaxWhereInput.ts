import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductGroupListRelationFilter } from "../productGroup/ProductGroupListRelationFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type SaleTaxWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  productGroups?: ProductGroupListRelationFilter;
  products?: ProductListRelationFilter;
};
