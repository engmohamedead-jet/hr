import { AccountUpdateManyWithoutCurrenciesInput } from "./AccountUpdateManyWithoutCurrenciesInput";
import { CustomerUpdateManyWithoutCurrenciesInput } from "./CustomerUpdateManyWithoutCurrenciesInput";
import { ExchangeRateDetailUpdateManyWithoutCurrenciesInput } from "./ExchangeRateDetailUpdateManyWithoutCurrenciesInput";
import { ExchangeRateDetailWhereUniqueInput } from "../exchangeRateDetail/ExchangeRateDetailWhereUniqueInput";
import { SupplierUpdateManyWithoutCurrenciesInput } from "./SupplierUpdateManyWithoutCurrenciesInput";

export type CurrencyUpdateInput = {
  accounts?: AccountUpdateManyWithoutCurrenciesInput;
  code?: string | null;
  customers?: CustomerUpdateManyWithoutCurrenciesInput;
  exchangeRateDetails?: ExchangeRateDetailUpdateManyWithoutCurrenciesInput;
  foreignCurrencyName?: ExchangeRateDetailWhereUniqueInput | null;
  hundredthName?: string;
  isDefault?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  suppliers?: SupplierUpdateManyWithoutCurrenciesInput;
  symbolField?: string;
};
