import { AccountTransactionDetailWhereInput } from "./AccountTransactionDetailWhereInput";
import { AccountTransactionDetailOrderByInput } from "./AccountTransactionDetailOrderByInput";

export type AccountTransactionDetailFindManyArgs = {
  where?: AccountTransactionDetailWhereInput;
  orderBy?: Array<AccountTransactionDetailOrderByInput>;
  skip?: number;
  take?: number;
};
