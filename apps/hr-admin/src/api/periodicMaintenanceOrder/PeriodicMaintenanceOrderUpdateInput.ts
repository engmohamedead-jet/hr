import { CustomerElevatorWhereUniqueInput } from "../customerElevator/CustomerElevatorWhereUniqueInput";
import { CustomerUserWhereUniqueInput } from "../customerUser/CustomerUserWhereUniqueInput";
import { ElevatorWhereUniqueInput } from "../elevator/ElevatorWhereUniqueInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type PeriodicMaintenanceOrderUpdateInput = {
  confirmDate?: Date | null;
  contractEndDate?: Date;
  contractStartDate?: Date;
  customerElevator?: CustomerElevatorWhereUniqueInput | null;
  customerUserId?: CustomerUserWhereUniqueInput | null;
  elevatorId?: ElevatorWhereUniqueInput | null;
  isConfirmed?: boolean | null;
  orderDate?: Date;
  storeId?: StoreWhereUniqueInput;
};
