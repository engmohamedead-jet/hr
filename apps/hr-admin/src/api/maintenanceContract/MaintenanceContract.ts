import { ContractPeriod } from "../contractPeriod/ContractPeriod";
import { Customer } from "../customer/Customer";
import { CustomerUser } from "../customerUser/CustomerUser";
import { Elevator } from "../elevator/Elevator";
import { Store } from "../store/Store";

export type MaintenanceContract = {
  confirmDate: Date | null;
  contactEndTime: Date | null;
  contactStartTime: Date | null;
  contractPeriodId?: ContractPeriod;
  contractStartDate: Date;
  createdAt: Date;
  customerId?: Customer;
  customerUserId?: CustomerUser | null;
  elevatorId?: Elevator;
  id: string;
  isConfirmed: boolean | null;
  note: string | null;
  orderDate: Date | null;
  storeId?: Store | null;
  updatedAt: Date;
};
