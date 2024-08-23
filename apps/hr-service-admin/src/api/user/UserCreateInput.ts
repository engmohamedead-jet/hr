import { AttendanceCreateNestedManyWithoutUsersInput } from "./AttendanceCreateNestedManyWithoutUsersInput";
import { BonusRequestCreateNestedManyWithoutUsersInput } from "./BonusRequestCreateNestedManyWithoutUsersInput";
import { CheckInOutCreateNestedManyWithoutUsersInput } from "./CheckInOutCreateNestedManyWithoutUsersInput";
import { DailyMovementRequestCreateNestedManyWithoutUsersInput } from "./DailyMovementRequestCreateNestedManyWithoutUsersInput";
import { DayOffRequestCreateNestedManyWithoutUsersInput } from "./DayOffRequestCreateNestedManyWithoutUsersInput";
import { LeaveRequestCreateNestedManyWithoutUsersInput } from "./LeaveRequestCreateNestedManyWithoutUsersInput";
import { OverNightRequestCreateNestedManyWithoutUsersInput } from "./OverNightRequestCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  attendances?: AttendanceCreateNestedManyWithoutUsersInput;
  bonuses?: BonusRequestCreateNestedManyWithoutUsersInput;
  checkInOuts?: CheckInOutCreateNestedManyWithoutUsersInput;
  dailyMovements?: DailyMovementRequestCreateNestedManyWithoutUsersInput;
  dayOffs?: DayOffRequestCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  leaveRequests?: LeaveRequestCreateNestedManyWithoutUsersInput;
  overNights?: OverNightRequestCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  username: string;
};
