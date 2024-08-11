import { CustomerElevator } from "../customerElevator/CustomerElevator";
import { CustomerUser } from "../customerUser/CustomerUser";
import { Elevator } from "../elevator/Elevator";
import { Store } from "../store/Store";

export type PeriodicMaintenanceOrder = {
  confirmDate: Date | null;
  contractEndDate: Date;
  contractStartDate: Date;
  createdAt: Date;
  customerElevator?: CustomerElevator | null;
  customerUserId?: CustomerUser | null;
  elevatorId?: Elevator | null;
  id: string;
  isConfirmed: boolean | null;
  orderDate: Date;
  storeId?: Store;
  updatedAt: Date;
};
