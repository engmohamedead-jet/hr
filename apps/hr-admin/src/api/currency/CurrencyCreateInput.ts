import { AccountCreateNestedManyWithoutCurrenciesInput } from "./AccountCreateNestedManyWithoutCurrenciesInput";
import { CustomerCreateNestedManyWithoutCurrenciesInput } from "./CustomerCreateNestedManyWithoutCurrenciesInput";
import { ExchangeRateDetailCreateNestedManyWithoutCurrenciesInput } from "./ExchangeRateDetailCreateNestedManyWithoutCurrenciesInput";
import { ExchangeRateDetailWhereUniqueInput } from "../exchangeRateDetail/ExchangeRateDetailWhereUniqueInput";
import { SupplierCreateNestedManyWithoutCurrenciesInput } from "./SupplierCreateNestedManyWithoutCurrenciesInput";

export type CurrencyCreateInput = {
  accounts?: AccountCreateNestedManyWithoutCurrenciesInput;
  code?: string | null;
  customers?: CustomerCreateNestedManyWithoutCurrenciesInput;
  exchangeRateDetails?: ExchangeRateDetailCreateNestedManyWithoutCurrenciesInput;
  foreignCurrencyName?: ExchangeRateDetailWhereUniqueInput | null;
  hundredthName: string;
  isDefault: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  suppliers?: SupplierCreateNestedManyWithoutCurrenciesInput;
  symbolField: string;
};
