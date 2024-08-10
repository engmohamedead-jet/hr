import { ExchangeRateDetailWhereInput } from "./ExchangeRateDetailWhereInput";
import { ExchangeRateDetailOrderByInput } from "./ExchangeRateDetailOrderByInput";

export type ExchangeRateDetailFindManyArgs = {
  where?: ExchangeRateDetailWhereInput;
  orderBy?: Array<ExchangeRateDetailOrderByInput>;
  skip?: number;
  take?: number;
};
