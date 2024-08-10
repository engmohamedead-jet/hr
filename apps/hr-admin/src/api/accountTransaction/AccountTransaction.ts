import { AccountTransactionDetail } from "../accountTransactionDetail/AccountTransactionDetail";
import { CostCenter } from "../costCenter/CostCenter";
import { Store } from "../store/Store";

export type AccountTransaction = {
  accountTransactionDetails?: Array<AccountTransactionDetail>;
  costCenter?: CostCenter | null;
  createdAt: Date;
  id: string;
  note: string | null;
  referenceNumber: string | null;
  statementReference: string | null;
  store?: Store;
  transactionDate: Date | null;
  updatedAt: Date;
};
