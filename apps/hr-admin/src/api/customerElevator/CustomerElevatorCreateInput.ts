import { ElevatorWhereUniqueInput } from "../elevator/ElevatorWhereUniqueInput";
import { FailureReportingCreateNestedManyWithoutCustomerElevatorsInput } from "./FailureReportingCreateNestedManyWithoutCustomerElevatorsInput";
import { InstallationContractCreateNestedManyWithoutCustomerElevatorsInput } from "./InstallationContractCreateNestedManyWithoutCustomerElevatorsInput";
import { InputJsonValue } from "../../types";
import { PeriodicMaintenanceOrderCreateNestedManyWithoutCustomerElevatorsInput } from "./PeriodicMaintenanceOrderCreateNestedManyWithoutCustomerElevatorsInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type CustomerElevatorCreateInput = {
  address?: string | null;
  amount?: string | null;
  code?: string | null;
  elevatorId: ElevatorWhereUniqueInput;
  failureReportings?: FailureReportingCreateNestedManyWithoutCustomerElevatorsInput;
  hasPendingMaintenanceContractOrders?: string | null;
  installationContracts?: InstallationContractCreateNestedManyWithoutCustomerElevatorsInput;
  maintenanceContractDocumentImage?: InputJsonValue;
  maintenanceEndDate?: Date | null;
  maintenanceStartDate?: Date | null;
  name?: string | null;
  normalizedName?: string | null;
  note?: string | null;
  periodicMaintenanceOrders?: PeriodicMaintenanceOrderCreateNestedManyWithoutCustomerElevatorsInput;
  phoneNumber?: string | null;
  storeId: StoreWhereUniqueInput;
};
