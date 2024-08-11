import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ElevatorWhereUniqueInput } from "../elevator/ElevatorWhereUniqueInput";
import { FailureReportingListRelationFilter } from "../failureReporting/FailureReportingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { InstallationContractListRelationFilter } from "../installationContract/InstallationContractListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PeriodicMaintenanceOrderListRelationFilter } from "../periodicMaintenanceOrder/PeriodicMaintenanceOrderListRelationFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type CustomerElevatorWhereInput = {
  address?: StringNullableFilter;
  amount?: StringNullableFilter;
  code?: StringNullableFilter;
  elevatorId?: ElevatorWhereUniqueInput;
  failureReportings?: FailureReportingListRelationFilter;
  hasPendingMaintenanceContractOrders?: StringNullableFilter;
  id?: StringFilter;
  installationContracts?: InstallationContractListRelationFilter;
  maintenanceContractDocumentImage?: JsonFilter;
  maintenanceEndDate?: DateTimeNullableFilter;
  maintenanceStartDate?: DateTimeNullableFilter;
  name?: StringNullableFilter;
  normalizedName?: StringNullableFilter;
  note?: StringNullableFilter;
  periodicMaintenanceOrders?: PeriodicMaintenanceOrderListRelationFilter;
  phoneNumber?: StringNullableFilter;
  storeId?: StoreWhereUniqueInput;
};
