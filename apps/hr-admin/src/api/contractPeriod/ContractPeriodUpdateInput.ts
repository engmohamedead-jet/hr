import { MaintenanceContractUpdateManyWithoutContractPeriodsInput } from "./MaintenanceContractUpdateManyWithoutContractPeriodsInput";

export type ContractPeriodUpdateInput = {
  Description?: string | null;
  code?: string | null;
  maintenanceContracts?: MaintenanceContractUpdateManyWithoutContractPeriodsInput;
  name?: string;
  normalizedName?: string;
  note?: string | null;
};
