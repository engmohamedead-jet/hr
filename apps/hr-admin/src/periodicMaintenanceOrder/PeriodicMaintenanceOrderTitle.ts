import { PeriodicMaintenanceOrder as TPeriodicMaintenanceOrder } from "../api/periodicMaintenanceOrder/PeriodicMaintenanceOrder";

export const PERIODICMAINTENANCEORDER_TITLE_FIELD = "id";

export const PeriodicMaintenanceOrderTitle = (
  record: TPeriodicMaintenanceOrder
): string => {
  return record.id?.toString() || String(record.id);
};
