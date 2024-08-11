import { ContractPeriodWhereUniqueInput } from "../contractPeriod/ContractPeriodWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { CustomerUserWhereUniqueInput } from "../customerUser/CustomerUserWhereUniqueInput";
import { ElevatorWhereUniqueInput } from "../elevator/ElevatorWhereUniqueInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type MaintenanceContractUpdateInput = {
  confirmDate?: Date | null;
  contactEndTime?: Date | null;
  contactStartTime?: Date | null;
  contractPeriodId?: ContractPeriodWhereUniqueInput;
  contractStartDate?: Date;
  customerId?: CustomerWhereUniqueInput;
  customerUserId?: CustomerUserWhereUniqueInput | null;
  elevatorId?: ElevatorWhereUniqueInput;
  isConfirmed?: boolean | null;
  note?: string | null;
  orderDate?: Date | null;
  storeId?: StoreWhereUniqueInput | null;
};
