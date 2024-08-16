import { CustomerCreateNestedManyWithoutCurrenciesInput } from "./CustomerCreateNestedManyWithoutCurrenciesInput";

export type CurrencyCreateInput = {
  code?: string | null;
  customers?: CustomerCreateNestedManyWithoutCurrenciesInput;
  description?: string | null;
  name: string;
  normalizedName: string;
  note?: string | null;
};
