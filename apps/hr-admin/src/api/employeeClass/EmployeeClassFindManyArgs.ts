import { EmployeeClassWhereInput } from "./EmployeeClassWhereInput";
import { EmployeeClassOrderByInput } from "./EmployeeClassOrderByInput";

export type EmployeeClassFindManyArgs = {
  where?: EmployeeClassWhereInput;
  orderBy?: Array<EmployeeClassOrderByInput>;
  skip?: number;
  take?: number;
};
