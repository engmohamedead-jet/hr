import { Account } from "../account/Account";

export type AccountCategory = {
  accounts?: Array<Account>;
  code: string;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string;
  normalizedName: string;
  note: string | null;
  updatedAt: Date;
};
