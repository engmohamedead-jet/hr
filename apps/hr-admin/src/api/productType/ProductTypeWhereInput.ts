import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type ProductTypeWhereInput = {
  code?: StringNullableFilter;
  id?: IntFilter;
  isComponent?: BooleanNullableFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  products?: ProductListRelationFilter;
};
