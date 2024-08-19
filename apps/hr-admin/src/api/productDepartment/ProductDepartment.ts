import { Product } from "../product/Product";
import { Tenant } from "../tenant/Tenant";

export type ProductDepartment = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  isActive: boolean;
  isDefault: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  parentProductDepartmentId?: ProductDepartment | null;
  productDepartments?: Array<ProductDepartment>;
  products?: Array<Product>;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
