import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { ExchangeRateDetailListRelationFilter } from "../exchangeRateDetail/ExchangeRateDetailListRelationFilter";
import { ExchangeRateDetailWhereUniqueInput } from "../exchangeRateDetail/ExchangeRateDetailWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { SupplierListRelationFilter } from "../supplier/SupplierListRelationFilter";

export type CurrencyWhereInput = {
  accounts?: AccountListRelationFilter;
  code?: StringNullableFilter;
  customers?: CustomerListRelationFilter;
  exchangeRateDetails?: ExchangeRateDetailListRelationFilter;
  foreignCurrencyName?: ExchangeRateDetailWhereUniqueInput;
  hundredthName?: StringFilter;
  id?: StringFilter;
  isDefault?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  suppliers?: SupplierListRelationFilter;
  symbolField?: StringFilter;
};
