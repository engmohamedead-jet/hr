import { ProductDepartmentWhereInput } from "./ProductDepartmentWhereInput";
import { ProductDepartmentOrderByInput } from "./ProductDepartmentOrderByInput";

export type ProductDepartmentFindManyArgs = {
  where?: ProductDepartmentWhereInput;
  orderBy?: Array<ProductDepartmentOrderByInput>;
  skip?: number;
  take?: number;
};
