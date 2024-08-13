import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductCategoryListRelationFilter } from "../productCategory/ProductCategoryListRelationFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type ProductDepartmentWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  isDefault?: BooleanNullableFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  productCategories?: ProductCategoryListRelationFilter;
  products?: ProductListRelationFilter;
};
