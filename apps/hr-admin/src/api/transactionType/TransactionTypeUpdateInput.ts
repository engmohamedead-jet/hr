import { AccountTransactionDetailUpdateManyWithoutTransactionTypesInput } from "./AccountTransactionDetailUpdateManyWithoutTransactionTypesInput";

export type TransactionTypeUpdateInput = {
  accountTransactionDetails?: AccountTransactionDetailUpdateManyWithoutTransactionTypesInput;
  code?: string;
  description?: string | null;
  name?: string;
  normalizedName?: string;
};
