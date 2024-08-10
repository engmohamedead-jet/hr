import { AccountTransactionCreateNestedManyWithoutCostCentersInput } from "./AccountTransactionCreateNestedManyWithoutCostCentersInput";

export type CostCenterCreateInput = {
  accountTransactions?: AccountTransactionCreateNestedManyWithoutCostCentersInput;
  code: string;
  description?: string | null;
  isSystem?: boolean | null;
  name: string;
  normalizedName: string;
  note?: string | null;
};
