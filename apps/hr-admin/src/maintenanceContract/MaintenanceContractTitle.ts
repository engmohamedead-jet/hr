import { MaintenanceContract as TMaintenanceContract } from "../api/maintenanceContract/MaintenanceContract";

export const MAINTENANCECONTRACT_TITLE_FIELD = "note";

export const MaintenanceContractTitle = (
  record: TMaintenanceContract
): string => {
  return record.note?.toString() || String(record.id);
};
