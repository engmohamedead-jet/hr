import { EmployeeSalaryDetailWhereInput } from "./EmployeeSalaryDetailWhereInput";
import { EmployeeSalaryDetailOrderByInput } from "./EmployeeSalaryDetailOrderByInput";

export type EmployeeSalaryDetailFindManyArgs = {
  where?: EmployeeSalaryDetailWhereInput;
  orderBy?: Array<EmployeeSalaryDetailOrderByInput>;
  skip?: number;
  take?: number;
};
