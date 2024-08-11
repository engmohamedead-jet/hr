import { AccountTransactionDetailListRelationFilter } from "../accountTransactionDetail/AccountTransactionDetailListRelationFilter";
import { AccountTransactionListRelationFilter } from "../accountTransaction/AccountTransactionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { CustomerElevatorListRelationFilter } from "../customerElevator/CustomerElevatorListRelationFilter";
import { ElevatorListRelationFilter } from "../elevator/ElevatorListRelationFilter";
import { FailureReportingListRelationFilter } from "../failureReporting/FailureReportingListRelationFilter";
import { MaintenanceContractListRelationFilter } from "../maintenanceContract/MaintenanceContractListRelationFilter";
import { MaintenanceVisitListRelationFilter } from "../maintenanceVisit/MaintenanceVisitListRelationFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { OfficeWhereUniqueInput } from "../office/OfficeWhereUniqueInput";
import { PeriodicMaintenanceOrderListRelationFilter } from "../periodicMaintenanceOrder/PeriodicMaintenanceOrderListRelationFilter";
import { SaleTaxListRelationFilter } from "../saleTax/SaleTaxListRelationFilter";
import { StoreTypeWhereUniqueInput } from "../storeType/StoreTypeWhereUniqueInput";

export type StoreWhereInput = {
  accountTransactionDetails?: AccountTransactionDetailListRelationFilter;
  accountTransactions?: AccountTransactionListRelationFilter;
  addressLine1?: StringNullableFilter;
  allowSale?: BooleanFilter;
  cellPhoneNumber?: StringNullableFilter;
  code?: StringFilter;
  customerElevators?: CustomerElevatorListRelationFilter;
  elevators?: ElevatorListRelationFilter;
  failureReportings?: FailureReportingListRelationFilter;
  fax?: StringNullableFilter;
  homePhoneNumber?: StringNullableFilter;
  id?: StringFilter;
  maintenanceContracts?: MaintenanceContractListRelationFilter;
  maintenanceVisits?: MaintenanceVisitListRelationFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  office?: OfficeWhereUniqueInput;
  periodicMaintenanceOrders?: PeriodicMaintenanceOrderListRelationFilter;
  saleTaxes?: SaleTaxListRelationFilter;
  storeType?: StoreTypeWhereUniqueInput;
  street?: StringNullableFilter;
};
