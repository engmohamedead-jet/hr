import { SalaryItemWhereInput } from "./SalaryItemWhereInput";
import { SalaryItemOrderByInput } from "./SalaryItemOrderByInput";

export type SalaryItemFindManyArgs = {
  where?: SalaryItemWhereInput;
  orderBy?: Array<SalaryItemOrderByInput>;
  skip?: number;
  take?: number;
};
