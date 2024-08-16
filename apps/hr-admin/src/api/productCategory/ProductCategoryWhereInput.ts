import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type ProductCategoryWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isDefault?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  products?: ProductListRelationFilter;
};
