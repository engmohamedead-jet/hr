import { Attendance as TAttendance } from "../api/attendance/Attendance";

export const ATTENDANCE_TITLE_FIELD = "reasonForAbsenteeism";

export const AttendanceTitle = (record: TAttendance): string => {
  return record.reasonForAbsenteeism?.toString() || String(record.id);
};
