import { AccountTransactionWhereInput } from "./AccountTransactionWhereInput";
import { AccountTransactionOrderByInput } from "./AccountTransactionOrderByInput";

export type AccountTransactionFindManyArgs = {
  where?: AccountTransactionWhereInput;
  orderBy?: Array<AccountTransactionOrderByInput>;
  skip?: number;
  take?: number;
};
