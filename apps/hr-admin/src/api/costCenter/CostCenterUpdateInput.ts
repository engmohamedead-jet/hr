import { AccountTransactionUpdateManyWithoutCostCentersInput } from "./AccountTransactionUpdateManyWithoutCostCentersInput";

export type CostCenterUpdateInput = {
  accountTransactions?: AccountTransactionUpdateManyWithoutCostCentersInput;
  code?: string;
  description?: string | null;
  isSystem?: boolean | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
};
