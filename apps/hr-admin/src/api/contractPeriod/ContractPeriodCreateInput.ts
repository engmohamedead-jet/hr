import { MaintenanceContractCreateNestedManyWithoutContractPeriodsInput } from "./MaintenanceContractCreateNestedManyWithoutContractPeriodsInput";

export type ContractPeriodCreateInput = {
  Description?: string | null;
  code?: string | null;
  maintenanceContracts?: MaintenanceContractCreateNestedManyWithoutContractPeriodsInput;
  name: string;
  normalizedName: string;
  note?: string | null;
};
