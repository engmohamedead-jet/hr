import { AccountTransaction } from "../accountTransaction/AccountTransaction";

export type CostCenter = {
  accountTransactions?: Array<AccountTransaction>;
  code: string;
  createdAt: Date;
  description: string | null;
  id: string;
  isSystem: boolean | null;
  name: string;
  normalizedName: string;
  note: string | null;
  updatedAt: Date;
};
