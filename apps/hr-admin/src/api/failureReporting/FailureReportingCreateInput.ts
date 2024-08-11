import { CustomerElevatorWhereUniqueInput } from "../customerElevator/CustomerElevatorWhereUniqueInput";
import { CustomerUserWhereUniqueInput } from "../customerUser/CustomerUserWhereUniqueInput";
import { ElevatorWhereUniqueInput } from "../elevator/ElevatorWhereUniqueInput";
import { FailureTypeWhereUniqueInput } from "../failureType/FailureTypeWhereUniqueInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type FailureReportingCreateInput = {
  contactingFromTime?: Date | null;
  contactingToTime?: Date | null;
  customerElevatorId: CustomerElevatorWhereUniqueInput;
  customerUser: CustomerUserWhereUniqueInput;
  elevator?: ElevatorWhereUniqueInput | null;
  failureDescription?: string | null;
  failureTypeId: FailureTypeWhereUniqueInput;
  note?: string | null;
  reportingDate: Date;
  reviewDate?: Date | null;
  store?: StoreWhereUniqueInput | null;
  wasReviewed?: boolean | null;
};
