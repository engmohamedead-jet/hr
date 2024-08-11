import { ProductCategoryCreateNestedManyWithoutProductDepartmentsInput } from "./ProductCategoryCreateNestedManyWithoutProductDepartmentsInput";

export type ProductDepartmentCreateInput = {
  code?: string | null;
  description?: string | null;
  isDefault?: boolean | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  productCategories?: ProductCategoryCreateNestedManyWithoutProductDepartmentsInput;
};
