import { AttendanceListRelationFilter } from "../attendance/AttendanceListRelationFilter";
import { BonusRequestListRelationFilter } from "../bonusRequest/BonusRequestListRelationFilter";
import { CheckInOutListRelationFilter } from "../checkInOut/CheckInOutListRelationFilter";
import { DailyMovementRequestListRelationFilter } from "../dailyMovementRequest/DailyMovementRequestListRelationFilter";
import { DayOffRequestListRelationFilter } from "../dayOffRequest/DayOffRequestListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeaveRequestListRelationFilter } from "../leaveRequest/LeaveRequestListRelationFilter";
import { OverNightRequestListRelationFilter } from "../overNightRequest/OverNightRequestListRelationFilter";

export type UserWhereInput = {
  attendances?: AttendanceListRelationFilter;
  bonuses?: BonusRequestListRelationFilter;
  checkInOuts?: CheckInOutListRelationFilter;
  dailyMovements?: DailyMovementRequestListRelationFilter;
  dayOffs?: DayOffRequestListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  leaveRequests?: LeaveRequestListRelationFilter;
  overNights?: OverNightRequestListRelationFilter;
  username?: StringFilter;
};
