import { MaintenanceContract } from "../maintenanceContract/MaintenanceContract";

export type ContractPeriod = {
  Description: string | null;
  code: string | null;
  createdAt: Date;
  id: number;
  maintenanceContracts?: Array<MaintenanceContract>;
  name: string;
  normalizedName: string;
  note: string | null;
  updatedAt: Date;
};
