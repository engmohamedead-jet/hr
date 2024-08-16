import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductDepartmentWhereUniqueInput } from "./ProductDepartmentWhereUniqueInput";
import { ProductDepartmentListRelationFilter } from "./ProductDepartmentListRelationFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type ProductDepartmentWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  isDefault?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  parentProductDepartment?: ProductDepartmentWhereUniqueInput;
  productDepartments?: ProductDepartmentListRelationFilter;
  products?: ProductListRelationFilter;
};
