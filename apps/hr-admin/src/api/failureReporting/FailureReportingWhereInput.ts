import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CustomerElevatorWhereUniqueInput } from "../customerElevator/CustomerElevatorWhereUniqueInput";
import { CustomerUserWhereUniqueInput } from "../customerUser/CustomerUserWhereUniqueInput";
import { ElevatorWhereUniqueInput } from "../elevator/ElevatorWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FailureTypeWhereUniqueInput } from "../failureType/FailureTypeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type FailureReportingWhereInput = {
  contactingFromTime?: DateTimeNullableFilter;
  contactingToTime?: DateTimeNullableFilter;
  customerElevatorId?: CustomerElevatorWhereUniqueInput;
  customerUser?: CustomerUserWhereUniqueInput;
  elevator?: ElevatorWhereUniqueInput;
  failureDescription?: StringNullableFilter;
  failureTypeId?: FailureTypeWhereUniqueInput;
  id?: StringFilter;
  note?: StringNullableFilter;
  reportingDate?: DateTimeFilter;
  reviewDate?: DateTimeNullableFilter;
  store?: StoreWhereUniqueInput;
  wasReviewed?: BooleanNullableFilter;
};
