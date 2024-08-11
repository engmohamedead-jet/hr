import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CustomerElevatorWhereUniqueInput } from "../customerElevator/CustomerElevatorWhereUniqueInput";
import { CustomerUserWhereUniqueInput } from "../customerUser/CustomerUserWhereUniqueInput";
import { ElevatorWhereUniqueInput } from "../elevator/ElevatorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type PeriodicMaintenanceOrderWhereInput = {
  confirmDate?: DateTimeNullableFilter;
  contractEndDate?: DateTimeFilter;
  contractStartDate?: DateTimeFilter;
  customerElevator?: CustomerElevatorWhereUniqueInput;
  customerUserId?: CustomerUserWhereUniqueInput;
  elevatorId?: ElevatorWhereUniqueInput;
  id?: StringFilter;
  isConfirmed?: BooleanNullableFilter;
  orderDate?: DateTimeFilter;
  storeId?: StoreWhereUniqueInput;
};
