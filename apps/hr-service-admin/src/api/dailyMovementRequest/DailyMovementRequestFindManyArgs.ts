import { DailyMovementRequestWhereInput } from "./DailyMovementRequestWhereInput";
import { DailyMovementRequestOrderByInput } from "./DailyMovementRequestOrderByInput";

export type DailyMovementRequestFindManyArgs = {
  where?: DailyMovementRequestWhereInput;
  orderBy?: Array<DailyMovementRequestOrderByInput>;
  skip?: number;
  take?: number;
};
