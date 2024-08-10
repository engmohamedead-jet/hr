import { Account } from "../account/Account";

export type AccountType = {
  accounts?: Array<Account>;
  code: string;
  createdAt: Date;
  description: string | null;
  id: number;
  isSystem: boolean | null;
  name: string;
  normalizedName: string | null;
  note: string | null;
  updatedAt: Date;
};
