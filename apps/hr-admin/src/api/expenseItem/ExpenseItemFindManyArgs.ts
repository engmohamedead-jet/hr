import { ExpenseItemWhereInput } from "./ExpenseItemWhereInput";
import { ExpenseItemOrderByInput } from "./ExpenseItemOrderByInput";

export type ExpenseItemFindManyArgs = {
  where?: ExpenseItemWhereInput;
  orderBy?: Array<ExpenseItemOrderByInput>;
  skip?: number;
  take?: number;
};
