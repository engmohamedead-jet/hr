import { SortOrder } from "../../util/SortOrder";

export type AttendanceOrderByInput = {
  attendanceDate?: SortOrder;
  checkInTime?: SortOrder;
  checkOutTime?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  note?: SortOrder;
  overtimeHours?: SortOrder;
  reasonForAbsenteeism?: SortOrder;
  updatedAt?: SortOrder;
  wasAbsent?: SortOrder;
  wasPresent?: SortOrder;
};
