import { WorkOrderDependency as TWorkOrderDependency } from "../api/workOrderDependency/WorkOrderDependency";

export const WORKORDERDEPENDENCY_TITLE_FIELD = "id";

export const WorkOrderDependencyTitle = (
  record: TWorkOrderDependency
): string => {
  return record.id?.toString() || String(record.id);
};
