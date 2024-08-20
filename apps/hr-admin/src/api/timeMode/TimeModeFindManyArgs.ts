import { TimeModeWhereInput } from "./TimeModeWhereInput";
import { TimeModeOrderByInput } from "./TimeModeOrderByInput";

export type TimeModeFindManyArgs = {
  where?: TimeModeWhereInput;
  orderBy?: Array<TimeModeOrderByInput>;
  skip?: number;
  take?: number;
};
