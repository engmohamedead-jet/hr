import { ProductDepartmentWhereUniqueInput } from "../productDepartment/ProductDepartmentWhereUniqueInput";
import { ProductCreateNestedManyWithoutProductCategoriesInput } from "./ProductCreateNestedManyWithoutProductCategoriesInput";

export type ProductCategoryCreateInput = {
  code?: string | null;
  description?: string | null;
  isDefault?: boolean | null;
  name?: string | null;
  normalizedName?: string | null;
  note?: string | null;
  productDepartment?: ProductDepartmentWhereUniqueInput | null;
  products?: ProductCreateNestedManyWithoutProductCategoriesInput;
};
