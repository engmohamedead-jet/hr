import { AccountTransactionDetailCreateNestedManyWithoutStoresInput } from "./AccountTransactionDetailCreateNestedManyWithoutStoresInput";
import { AccountTransactionCreateNestedManyWithoutStoresInput } from "./AccountTransactionCreateNestedManyWithoutStoresInput";
import { CustomerElevatorCreateNestedManyWithoutStoresInput } from "./CustomerElevatorCreateNestedManyWithoutStoresInput";
import { ElevatorCreateNestedManyWithoutStoresInput } from "./ElevatorCreateNestedManyWithoutStoresInput";
import { FailureReportingCreateNestedManyWithoutStoresInput } from "./FailureReportingCreateNestedManyWithoutStoresInput";
import { MaintenanceContractCreateNestedManyWithoutStoresInput } from "./MaintenanceContractCreateNestedManyWithoutStoresInput";
import { MaintenanceVisitCreateNestedManyWithoutStoresInput } from "./MaintenanceVisitCreateNestedManyWithoutStoresInput";
import { NotificationCreateNestedManyWithoutStoresInput } from "./NotificationCreateNestedManyWithoutStoresInput";
import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";
import { PeriodicMaintenanceOrderCreateNestedManyWithoutStoresInput } from "./PeriodicMaintenanceOrderCreateNestedManyWithoutStoresInput";
import { SaleTaxCreateNestedManyWithoutStoresInput } from "./SaleTaxCreateNestedManyWithoutStoresInput";
import { StoreTypeWhereUniqueInput } from "../storeType/StoreTypeWhereUniqueInput";

export type StoreCreateInput = {
  accountTransactionDetails?: AccountTransactionDetailCreateNestedManyWithoutStoresInput;
  accountTransactions?: AccountTransactionCreateNestedManyWithoutStoresInput;
  addressLine1?: string | null;
  allowSale: boolean;
  cellPhoneNumber?: string | null;
  code: string;
  customerElevators?: CustomerElevatorCreateNestedManyWithoutStoresInput;
  elevators?: ElevatorCreateNestedManyWithoutStoresInput;
  failureReportings?: FailureReportingCreateNestedManyWithoutStoresInput;
  fax?: string | null;
  homePhoneNumber?: string | null;
  maintenanceContracts?: MaintenanceContractCreateNestedManyWithoutStoresInput;
  maintenanceVisits?: MaintenanceVisitCreateNestedManyWithoutStoresInput;
  name: string;
  normalizedName: string;
  note?: string | null;
  notifications?: NotificationCreateNestedManyWithoutStoresInput;
  office: OfficeWhereUniqueInput;
  periodicMaintenanceOrders?: PeriodicMaintenanceOrderCreateNestedManyWithoutStoresInput;
  saleTaxes?: SaleTaxCreateNestedManyWithoutStoresInput;
  storeType: StoreTypeWhereUniqueInput;
  street?: string | null;
};
