import { LeaveRequestTypeWhereInput } from "./LeaveRequestTypeWhereInput";
import { LeaveRequestTypeOrderByInput } from "./LeaveRequestTypeOrderByInput";

export type LeaveRequestTypeFindManyArgs = {
  where?: LeaveRequestTypeWhereInput;
  orderBy?: Array<LeaveRequestTypeOrderByInput>;
  skip?: number;
  take?: number;
};
