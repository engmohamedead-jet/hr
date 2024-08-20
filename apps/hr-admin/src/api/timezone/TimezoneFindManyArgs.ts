import { TimezoneWhereInput } from "./TimezoneWhereInput";
import { TimezoneOrderByInput } from "./TimezoneOrderByInput";

export type TimezoneFindManyArgs = {
  where?: TimezoneWhereInput;
  orderBy?: Array<TimezoneOrderByInput>;
  skip?: number;
  take?: number;
};
