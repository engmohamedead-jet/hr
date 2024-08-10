import { Customer } from "../customer/Customer";

export type CustomerType = {
  code: string | null;
  createdAt: Date;
  customers?: Array<Customer>;
  description: string | null;
  id: number;
  name: string | null;
  normalizedName: string;
  note: string | null;
  updatedAt: Date;
};
