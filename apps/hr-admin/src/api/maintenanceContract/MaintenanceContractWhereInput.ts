import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ContractPeriodWhereUniqueInput } from "../contractPeriod/ContractPeriodWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { CustomerUserWhereUniqueInput } from "../customerUser/CustomerUserWhereUniqueInput";
import { ElevatorWhereUniqueInput } from "../elevator/ElevatorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type MaintenanceContractWhereInput = {
  confirmDate?: DateTimeNullableFilter;
  contactEndTime?: DateTimeNullableFilter;
  contactStartTime?: DateTimeNullableFilter;
  contractPeriodId?: ContractPeriodWhereUniqueInput;
  contractStartDate?: DateTimeFilter;
  customerId?: CustomerWhereUniqueInput;
  customerUserId?: CustomerUserWhereUniqueInput;
  elevatorId?: ElevatorWhereUniqueInput;
  id?: StringFilter;
  isConfirmed?: BooleanNullableFilter;
  note?: StringNullableFilter;
  orderDate?: DateTimeNullableFilter;
  storeId?: StoreWhereUniqueInput;
};
