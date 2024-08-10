import { AccountTransactionDetail } from "../accountTransactionDetail/AccountTransactionDetail";

export type TransactionType = {
  accountTransactionDetails?: Array<AccountTransactionDetail>;
  code: string;
  createdAt: Date;
  description: string | null;
  id: number;
  name: string;
  normalizedName: string;
  updatedAt: Date;
};
