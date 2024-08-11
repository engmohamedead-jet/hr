import { Elevator } from "../elevator/Elevator";
import { FailureReporting } from "../failureReporting/FailureReporting";
import { InstallationContract } from "../installationContract/InstallationContract";
import { JsonValue } from "type-fest";
import { PeriodicMaintenanceOrder } from "../periodicMaintenanceOrder/PeriodicMaintenanceOrder";
import { Store } from "../store/Store";

export type CustomerElevator = {
  address: string | null;
  amount: string | null;
  code: string | null;
  createdAt: Date;
  elevatorId?: Elevator;
  failureReportings?: Array<FailureReporting>;
  hasPendingMaintenanceContractOrders: string | null;
  id: string;
  installationContracts?: Array<InstallationContract>;
  maintenanceContractDocumentImage: JsonValue;
  maintenanceEndDate: Date | null;
  maintenanceStartDate: Date | null;
  name: string | null;
  normalizedName: string | null;
  note: string | null;
  periodicMaintenanceOrders?: Array<PeriodicMaintenanceOrder>;
  phoneNumber: string | null;
  storeId?: Store;
  updatedAt: Date;
};
