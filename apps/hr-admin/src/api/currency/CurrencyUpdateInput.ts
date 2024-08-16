import { CustomerUpdateManyWithoutCurrenciesInput } from "./CustomerUpdateManyWithoutCurrenciesInput";

export type CurrencyUpdateInput = {
  code?: string | null;
  customers?: CustomerUpdateManyWithoutCurrenciesInput;
  description?: string | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
};
