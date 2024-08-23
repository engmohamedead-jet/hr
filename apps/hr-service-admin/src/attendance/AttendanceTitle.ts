import { Attendance as TAttendance } from "../api/attendance/Attendance";

export const ATTENDANCE_TITLE_FIELD = "checkInTime";

export const AttendanceTitle = (record: TAttendance): string => {
  return record.checkInTime?.toString() || String(record.id);
};
