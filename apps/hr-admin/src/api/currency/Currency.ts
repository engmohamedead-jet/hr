import { Account } from "../account/Account";
import { Customer } from "../customer/Customer";
import { ExchangeRateDetail } from "../exchangeRateDetail/ExchangeRateDetail";
import { Supplier } from "../supplier/Supplier";

export type Currency = {
  accounts?: Array<Account>;
  code: string | null;
  createdAt: Date;
  customers?: Array<Customer>;
  exchangeRateDetails?: Array<ExchangeRateDetail>;
  foreignCurrencyName?: ExchangeRateDetail | null;
  hundredthName: string;
  id: string;
  isDefault: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  suppliers?: Array<Supplier>;
  symbolField: string;
  updatedAt: Date;
};
