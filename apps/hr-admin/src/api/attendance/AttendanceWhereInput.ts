import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type AttendanceWhereInput = {
  attendanceDate?: DateTimeNullableFilter;
  checkInTime?: DateTimeNullableFilter;
  checkOutTime?: DateTimeNullableFilter;
  id?: StringFilter;
  note?: StringNullableFilter;
  overtimeHours?: DecimalNullableFilter;
  reasonForAbsenteeism?: StringNullableFilter;
  wasAbsent?: BooleanNullableFilter;
  wasPresent?: BooleanFilter;
};
