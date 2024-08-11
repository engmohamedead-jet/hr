import { CustomerElevator as TCustomerElevator } from "../api/customerElevator/CustomerElevator";

export const CUSTOMERELEVATOR_TITLE_FIELD = "name";

export const CustomerElevatorTitle = (record: TCustomerElevator): string => {
  return record.name?.toString() || String(record.id);
};
