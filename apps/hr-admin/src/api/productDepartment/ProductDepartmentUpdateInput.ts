import { ProductCategoryUpdateManyWithoutProductDepartmentsInput } from "./ProductCategoryUpdateManyWithoutProductDepartmentsInput";

export type ProductDepartmentUpdateInput = {
  code?: string | null;
  description?: string | null;
  isDefault?: boolean | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  productCategories?: ProductCategoryUpdateManyWithoutProductDepartmentsInput;
};
