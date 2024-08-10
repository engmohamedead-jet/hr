import { Decimal } from "decimal.js";
import { Currency } from "../currency/Currency";

export type ExchangeRateDetail = {
  createdAt: Date;
  exchangeRateDate: Date | null;
  exchangeRateValue: Decimal;
  foreignCurrencyId?: Currency | null;
  id: string;
  localCurrencyId?: Currency;
  unit: number;
  updatedAt: Date;
};
