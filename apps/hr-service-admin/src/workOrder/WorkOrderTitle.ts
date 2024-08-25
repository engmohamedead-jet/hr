import { WorkOrder as TWorkOrder } from "../api/workOrder/WorkOrder";

export const WORKORDER_TITLE_FIELD = "name";

export const WorkOrderTitle = (record: TWorkOrder): string => {
  return record.name?.toString() || String(record.id);
};
