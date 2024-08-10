import { AccountTransactionDetailCreateNestedManyWithoutTransactionTypesInput } from "./AccountTransactionDetailCreateNestedManyWithoutTransactionTypesInput";

export type TransactionTypeCreateInput = {
  accountTransactionDetails?: AccountTransactionDetailCreateNestedManyWithoutTransactionTypesInput;
  code: string;
  description?: string | null;
  name: string;
  normalizedName: string;
};
