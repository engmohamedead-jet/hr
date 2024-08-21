import { SalaryItemTypeWhereInput } from "./SalaryItemTypeWhereInput";
import { SalaryItemTypeOrderByInput } from "./SalaryItemTypeOrderByInput";

export type SalaryItemTypeFindManyArgs = {
  where?: SalaryItemTypeWhereInput;
  orderBy?: Array<SalaryItemTypeOrderByInput>;
  skip?: number;
  take?: number;
};
