import { CurrencySettingWhereInput } from "./CurrencySettingWhereInput";
import { CurrencySettingOrderByInput } from "./CurrencySettingOrderByInput";

export type CurrencySettingFindManyArgs = {
  where?: CurrencySettingWhereInput;
  orderBy?: Array<CurrencySettingOrderByInput>;
  skip?: number;
  take?: number;
};
