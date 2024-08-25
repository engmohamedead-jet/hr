import { TradingSummaryWhereInput } from "./TradingSummaryWhereInput";
import { TradingSummaryOrderByInput } from "./TradingSummaryOrderByInput";

export type TradingSummaryFindManyArgs = {
  where?: TradingSummaryWhereInput;
  orderBy?: Array<TradingSummaryOrderByInput>;
  skip?: number;
  take?: number;
};
