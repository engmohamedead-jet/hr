import { DayOffRequestWhereInput } from "./DayOffRequestWhereInput";
import { DayOffRequestOrderByInput } from "./DayOffRequestOrderByInput";

export type DayOffRequestFindManyArgs = {
  where?: DayOffRequestWhereInput;
  orderBy?: Array<DayOffRequestOrderByInput>;
  skip?: number;
  take?: number;
};
