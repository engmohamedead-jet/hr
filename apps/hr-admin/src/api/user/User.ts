import { Attendance } from "../attendance/Attendance";
import { BonusRequest } from "../bonusRequest/BonusRequest";
import { CheckInOut } from "../checkInOut/CheckInOut";
import { DailyMovementRequest } from "../dailyMovementRequest/DailyMovementRequest";
import { DayOffRequest } from "../dayOffRequest/DayOffRequest";
import { LeaveRequest } from "../leaveRequest/LeaveRequest";
import { OverNightRequest } from "../overNightRequest/OverNightRequest";
import { JsonValue } from "type-fest";

export type User = {
  attendances?: Array<Attendance>;
  bonuses?: Array<BonusRequest>;
  checkInOuts?: Array<CheckInOut>;
  createdAt: Date;
  dailyMovements?: Array<DailyMovementRequest>;
  dayOffs?: Array<DayOffRequest>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  leaveRequests?: Array<LeaveRequest>;
  overNights?: Array<OverNightRequest>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
