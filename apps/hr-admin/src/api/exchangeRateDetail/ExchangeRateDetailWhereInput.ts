import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type ExchangeRateDetailWhereInput = {
  exchangeRateDate?: DateTimeNullableFilter;
  exchangeRateValue?: DecimalFilter;
  foreignCurrencyId?: CurrencyWhereUniqueInput;
  id?: StringFilter;
  localCurrencyId?: CurrencyWhereUniqueInput;
  unit?: IntFilter;
};
