import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ProductDepartmentWhereUniqueInput } from "../productDepartment/ProductDepartmentWhereUniqueInput";

export type ProductCategoryWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  isDefault?: BooleanNullableFilter;
  name?: StringNullableFilter;
  normalizedName?: StringNullableFilter;
  note?: StringNullableFilter;
  productDepartment?: ProductDepartmentWhereUniqueInput;
};
