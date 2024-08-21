import { SalaryItemGroupWhereInput } from "./SalaryItemGroupWhereInput";
import { SalaryItemGroupOrderByInput } from "./SalaryItemGroupOrderByInput";

export type SalaryItemGroupFindManyArgs = {
  where?: SalaryItemGroupWhereInput;
  orderBy?: Array<SalaryItemGroupOrderByInput>;
  skip?: number;
  take?: number;
};
