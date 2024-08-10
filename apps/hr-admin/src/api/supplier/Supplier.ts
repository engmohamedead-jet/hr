import { Currency } from "../currency/Currency";
import { Customer } from "../customer/Customer";

export type Supplier = {
  address: string | null;
  code: string | null;
  createdAt: Date;
  credit: string | null;
  currencyId?: Currency | null;
  customers?: Array<Customer>;
  debit: string | null;
  description: string | null;
  email: string | null;
  id: string;
  name: string | null;
  normalizedName: string | null;
  note: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
  website: string | null;
};
