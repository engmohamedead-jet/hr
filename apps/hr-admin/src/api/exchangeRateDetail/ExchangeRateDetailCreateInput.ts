import { Decimal } from "decimal.js";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";

export type ExchangeRateDetailCreateInput = {
  exchangeRateDate?: Date | null;
  exchangeRateValue: Decimal;
  foreignCurrencyId?: CurrencyWhereUniqueInput | null;
  localCurrencyId: CurrencyWhereUniqueInput;
  unit: number;
};
