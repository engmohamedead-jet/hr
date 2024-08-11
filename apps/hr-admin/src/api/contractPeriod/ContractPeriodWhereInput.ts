import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { MaintenanceContractListRelationFilter } from "../maintenanceContract/MaintenanceContractListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContractPeriodWhereInput = {
  Description?: StringNullableFilter;
  code?: StringNullableFilter;
  id?: IntFilter;
  maintenanceContracts?: MaintenanceContractListRelationFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
};
