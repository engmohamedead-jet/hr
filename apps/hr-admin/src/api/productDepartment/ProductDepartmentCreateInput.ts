import { ProductDepartmentWhereUniqueInput } from "./ProductDepartmentWhereUniqueInput";
import { ProductDepartmentCreateNestedManyWithoutProductDepartmentsInput } from "./ProductDepartmentCreateNestedManyWithoutProductDepartmentsInput";
import { ProductCreateNestedManyWithoutProductDepartmentsInput } from "./ProductCreateNestedManyWithoutProductDepartmentsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ProductDepartmentCreateInput = {
  code?: string | null;
  description?: string | null;
  isActive: boolean;
  isDefault: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  parentProductDepartmentId?: ProductDepartmentWhereUniqueInput | null;
  productDepartments?: ProductDepartmentCreateNestedManyWithoutProductDepartmentsInput;
  products?: ProductCreateNestedManyWithoutProductDepartmentsInput;
  tenantId?: TenantWhereUniqueInput | null;
};
