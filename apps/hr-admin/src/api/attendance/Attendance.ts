import { Decimal } from "decimal.js";

export type Attendance = {
  attendanceDate: Date | null;
  checkInTime: Date | null;
  checkOutTime: Date | null;
  createdAt: Date;
  id: string;
  note: string | null;
  overtimeHours: Decimal | null;
  reasonForAbsenteeism: string | null;
  updatedAt: Date;
  wasAbsent: boolean | null;
  wasPresent: boolean;
};
