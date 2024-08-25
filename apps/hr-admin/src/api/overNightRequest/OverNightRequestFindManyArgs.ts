import { OverNightRequestWhereInput } from "./OverNightRequestWhereInput";
import { OverNightRequestOrderByInput } from "./OverNightRequestOrderByInput";

export type OverNightRequestFindManyArgs = {
  where?: OverNightRequestWhereInput;
  orderBy?: Array<OverNightRequestOrderByInput>;
  skip?: number;
  take?: number;
};
