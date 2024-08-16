import { ProductDepartmentWhereUniqueInput } from "./ProductDepartmentWhereUniqueInput";
import { ProductDepartmentCreateNestedManyWithoutProductDepartmentsInput } from "./ProductDepartmentCreateNestedManyWithoutProductDepartmentsInput";
import { ProductCreateNestedManyWithoutProductDepartmentsInput } from "./ProductCreateNestedManyWithoutProductDepartmentsInput";

export type ProductDepartmentCreateInput = {
  code?: string | null;
  description?: string | null;
  isDefault: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  parentProductDepartment?: ProductDepartmentWhereUniqueInput | null;
  productDepartments?: ProductDepartmentCreateNestedManyWithoutProductDepartmentsInput;
  products?: ProductCreateNestedManyWithoutProductDepartmentsInput;
};
