import { ElevatorWhereUniqueInput } from "../elevator/ElevatorWhereUniqueInput";
import { FailureReportingUpdateManyWithoutCustomerElevatorsInput } from "./FailureReportingUpdateManyWithoutCustomerElevatorsInput";
import { InstallationContractUpdateManyWithoutCustomerElevatorsInput } from "./InstallationContractUpdateManyWithoutCustomerElevatorsInput";
import { InputJsonValue } from "../../types";
import { PeriodicMaintenanceOrderUpdateManyWithoutCustomerElevatorsInput } from "./PeriodicMaintenanceOrderUpdateManyWithoutCustomerElevatorsInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type CustomerElevatorUpdateInput = {
  address?: string | null;
  amount?: string | null;
  code?: string | null;
  elevatorId?: ElevatorWhereUniqueInput;
  failureReportings?: FailureReportingUpdateManyWithoutCustomerElevatorsInput;
  hasPendingMaintenanceContractOrders?: string | null;
  installationContracts?: InstallationContractUpdateManyWithoutCustomerElevatorsInput;
  maintenanceContractDocumentImage?: InputJsonValue;
  maintenanceEndDate?: Date | null;
  maintenanceStartDate?: Date | null;
  name?: string | null;
  normalizedName?: string | null;
  note?: string | null;
  periodicMaintenanceOrders?: PeriodicMaintenanceOrderUpdateManyWithoutCustomerElevatorsInput;
  phoneNumber?: string | null;
  storeId?: StoreWhereUniqueInput;
};
