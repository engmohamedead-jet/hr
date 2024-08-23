import { AttendanceUpdateManyWithoutUsersInput } from "./AttendanceUpdateManyWithoutUsersInput";
import { BonusRequestUpdateManyWithoutUsersInput } from "./BonusRequestUpdateManyWithoutUsersInput";
import { CheckInOutUpdateManyWithoutUsersInput } from "./CheckInOutUpdateManyWithoutUsersInput";
import { DailyMovementRequestUpdateManyWithoutUsersInput } from "./DailyMovementRequestUpdateManyWithoutUsersInput";
import { DayOffRequestUpdateManyWithoutUsersInput } from "./DayOffRequestUpdateManyWithoutUsersInput";
import { LeaveRequestUpdateManyWithoutUsersInput } from "./LeaveRequestUpdateManyWithoutUsersInput";
import { OverNightRequestUpdateManyWithoutUsersInput } from "./OverNightRequestUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  attendances?: AttendanceUpdateManyWithoutUsersInput;
  bonuses?: BonusRequestUpdateManyWithoutUsersInput;
  checkInOuts?: CheckInOutUpdateManyWithoutUsersInput;
  dailyMovements?: DailyMovementRequestUpdateManyWithoutUsersInput;
  dayOffs?: DayOffRequestUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  leaveRequests?: LeaveRequestUpdateManyWithoutUsersInput;
  overNights?: OverNightRequestUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
