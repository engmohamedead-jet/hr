import { FiscalWeekWhereInput } from "./FiscalWeekWhereInput";
import { FiscalWeekOrderByInput } from "./FiscalWeekOrderByInput";

export type FiscalWeekFindManyArgs = {
  where?: FiscalWeekWhereInput;
  orderBy?: Array<FiscalWeekOrderByInput>;
  skip?: number;
  take?: number;
};
