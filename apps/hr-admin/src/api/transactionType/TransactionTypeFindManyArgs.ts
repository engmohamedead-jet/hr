import { TransactionTypeWhereInput } from "./TransactionTypeWhereInput";
import { TransactionTypeOrderByInput } from "./TransactionTypeOrderByInput";

export type TransactionTypeFindManyArgs = {
  where?: TransactionTypeWhereInput;
  orderBy?: Array<TransactionTypeOrderByInput>;
  skip?: number;
  take?: number;
};
