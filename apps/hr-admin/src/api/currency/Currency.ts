import { Customer } from "../customer/Customer";

export type Currency = {
  code: string | null;
  createdAt: Date;
  customers?: Array<Customer>;
  description: string | null;
  id: string;
  name: string;
  normalizedName: string;
  note: string | null;
  updatedAt: Date;
};
