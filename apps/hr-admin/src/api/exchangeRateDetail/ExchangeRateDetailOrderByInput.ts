import { SortOrder } from "../../util/SortOrder";

export type ExchangeRateDetailOrderByInput = {
  createdAt?: SortOrder;
  exchangeRateDate?: SortOrder;
  exchangeRateValue?: SortOrder;
  Name?: SortOrder;
  id?: SortOrder;
  localCurrencyIdId?: SortOrder;
  unit?: SortOrder;
  updatedAt?: SortOrder;
};
