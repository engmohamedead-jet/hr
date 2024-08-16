import { ProductDepartmentWhereUniqueInput } from "./ProductDepartmentWhereUniqueInput";
import { ProductDepartmentUpdateManyWithoutProductDepartmentsInput } from "./ProductDepartmentUpdateManyWithoutProductDepartmentsInput";
import { ProductUpdateManyWithoutProductDepartmentsInput } from "./ProductUpdateManyWithoutProductDepartmentsInput";

export type ProductDepartmentUpdateInput = {
  code?: string | null;
  description?: string | null;
  isDefault?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  parentProductDepartment?: ProductDepartmentWhereUniqueInput | null;
  productDepartments?: ProductDepartmentUpdateManyWithoutProductDepartmentsInput;
  products?: ProductUpdateManyWithoutProductDepartmentsInput;
};
