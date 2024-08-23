import { LeaveRequestType as TLeaveRequestType } from "../api/leaveRequestType/LeaveRequestType";

export const LEAVEREQUESTTYPE_TITLE_FIELD = "name";

export const LeaveRequestTypeTitle = (record: TLeaveRequestType): string => {
  return record.name?.toString() || String(record.id);
};
