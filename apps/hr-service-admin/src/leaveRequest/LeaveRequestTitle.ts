import { LeaveRequest as TLeaveRequest } from "../api/leaveRequest/LeaveRequest";

export const LEAVEREQUEST_TITLE_FIELD = "cause";

export const LeaveRequestTitle = (record: TLeaveRequest): string => {
  return record.cause?.toString() || String(record.id);
};
