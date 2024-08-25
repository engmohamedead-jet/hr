import { WorkOrderRouting as TWorkOrderRouting } from "../api/workOrderRouting/WorkOrderRouting";

export const WORKORDERROUTING_TITLE_FIELD = "id";

export const WorkOrderRoutingTitle = (record: TWorkOrderRouting): string => {
  return record.id?.toString() || String(record.id);
};
