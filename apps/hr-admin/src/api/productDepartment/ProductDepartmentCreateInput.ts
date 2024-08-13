import { ProductCategoryCreateNestedManyWithoutProductDepartmentsInput } from "./ProductCategoryCreateNestedManyWithoutProductDepartmentsInput";
import { ProductCreateNestedManyWithoutProductDepartmentsInput } from "./ProductCreateNestedManyWithoutProductDepartmentsInput";

export type ProductDepartmentCreateInput = {
  code?: string | null;
  description?: string | null;
  isDefault?: boolean | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  productCategories?: ProductCategoryCreateNestedManyWithoutProductDepartmentsInput;
  products?: ProductCreateNestedManyWithoutProductDepartmentsInput;
};
