import { CustomerElevator } from "../customerElevator/CustomerElevator";
import { CustomerUser } from "../customerUser/CustomerUser";
import { Elevator } from "../elevator/Elevator";
import { FailureType } from "../failureType/FailureType";
import { Store } from "../store/Store";

export type FailureReporting = {
  contactingFromTime: Date | null;
  contactingToTime: Date | null;
  createdAt: Date;
  customerElevatorId?: CustomerElevator;
  customerUser?: CustomerUser;
  elevator?: Elevator | null;
  failureDescription: string | null;
  failureTypeId?: FailureType;
  id: string;
  note: string | null;
  reportingDate: Date;
  reviewDate: Date | null;
  store?: Store | null;
  updatedAt: Date;
  wasReviewed: boolean | null;
};
