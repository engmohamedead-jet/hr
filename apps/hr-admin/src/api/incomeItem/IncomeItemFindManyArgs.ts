import { IncomeItemWhereInput } from "./IncomeItemWhereInput";
import { IncomeItemOrderByInput } from "./IncomeItemOrderByInput";

export type IncomeItemFindManyArgs = {
  where?: IncomeItemWhereInput;
  orderBy?: Array<IncomeItemOrderByInput>;
  skip?: number;
  take?: number;
};
