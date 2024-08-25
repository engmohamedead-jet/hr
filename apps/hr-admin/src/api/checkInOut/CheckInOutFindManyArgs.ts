import { CheckInOutWhereInput } from "./CheckInOutWhereInput";
import { CheckInOutOrderByInput } from "./CheckInOutOrderByInput";

export type CheckInOutFindManyArgs = {
  where?: CheckInOutWhereInput;
  orderBy?: Array<CheckInOutOrderByInput>;
  skip?: number;
  take?: number;
};
