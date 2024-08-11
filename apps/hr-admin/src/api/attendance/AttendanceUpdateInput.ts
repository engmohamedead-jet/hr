import { Decimal } from "decimal.js";

export type AttendanceUpdateInput = {
  attendanceDate?: Date | null;
  checkInTime?: Date | null;
  checkOutTime?: Date | null;
  note?: string | null;
  overtimeHours?: Decimal | null;
  reasonForAbsenteeism?: string | null;
  wasAbsent?: boolean | null;
  wasPresent?: boolean;
};
