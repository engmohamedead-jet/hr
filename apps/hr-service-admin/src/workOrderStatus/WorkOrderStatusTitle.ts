import { WorkOrderStatus as TWorkOrderStatus } from "../api/workOrderStatus/WorkOrderStatus";

export const WORKORDERSTATUS_TITLE_FIELD = "name";

export const WorkOrderStatusTitle = (record: TWorkOrderStatus): string => {
  return record.name?.toString() || String(record.id);
};
