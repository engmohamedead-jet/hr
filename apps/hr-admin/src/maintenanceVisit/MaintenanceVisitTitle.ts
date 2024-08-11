import { MaintenanceVisit as TMaintenanceVisit } from "../api/maintenanceVisit/MaintenanceVisit";

export const MAINTENANCEVISIT_TITLE_FIELD = "spareParts";

export const MaintenanceVisitTitle = (record: TMaintenanceVisit): string => {
  return record.spareParts?.toString() || String(record.id);
};
