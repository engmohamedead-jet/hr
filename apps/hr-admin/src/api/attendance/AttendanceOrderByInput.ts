import { SortOrder } from "../../util/SortOrder";

export type AttendanceOrderByInput = {
  ApprovedByUserIdId?: SortOrder;
  attendanceDate?: SortOrder;
  checkInTime?: SortOrder;
  checkOutTime?: SortOrder;
  createdAt?: SortOrder;
  employeeIdId?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isAppreoved?: SortOrder;
  note?: SortOrder;
  overtimeHours?: SortOrder;
  reasonForAbsenteeism?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
  wasAbsent?: SortOrder;
  wasPresent?: SortOrder;
};
