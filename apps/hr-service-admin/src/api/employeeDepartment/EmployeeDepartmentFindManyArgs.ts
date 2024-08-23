import { EmployeeDepartmentWhereInput } from "./EmployeeDepartmentWhereInput";
import { EmployeeDepartmentOrderByInput } from "./EmployeeDepartmentOrderByInput";

export type EmployeeDepartmentFindManyArgs = {
  where?: EmployeeDepartmentWhereInput;
  orderBy?: Array<EmployeeDepartmentOrderByInput>;
  skip?: number;
  take?: number;
};
