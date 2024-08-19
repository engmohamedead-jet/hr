import { ProductDepartmentWhereUniqueInput } from "./ProductDepartmentWhereUniqueInput";
import { ProductDepartmentUpdateManyWithoutProductDepartmentsInput } from "./ProductDepartmentUpdateManyWithoutProductDepartmentsInput";
import { ProductUpdateManyWithoutProductDepartmentsInput } from "./ProductUpdateManyWithoutProductDepartmentsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ProductDepartmentUpdateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean;
  isDefault?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  parentProductDepartmentId?: ProductDepartmentWhereUniqueInput | null;
  productDepartments?: ProductDepartmentUpdateManyWithoutProductDepartmentsInput;
  products?: ProductUpdateManyWithoutProductDepartmentsInput;
  tenantId?: TenantWhereUniqueInput | null;
};
