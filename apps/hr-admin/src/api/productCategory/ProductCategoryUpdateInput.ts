import { ProductDepartmentWhereUniqueInput } from "../productDepartment/ProductDepartmentWhereUniqueInput";

export type ProductCategoryUpdateInput = {
  code?: string | null;
  description?: string | null;
  isDefault?: boolean | null;
  name?: string | null;
  normalizedName?: string | null;
  note?: string | null;
  productDepartment?: ProductDepartmentWhereUniqueInput | null;
};
