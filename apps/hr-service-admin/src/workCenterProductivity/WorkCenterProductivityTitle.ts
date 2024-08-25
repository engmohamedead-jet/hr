import { WorkCenterProductivity as TWorkCenterProductivity } from "../api/workCenterProductivity/WorkCenterProductivity";

export const WORKCENTERPRODUCTIVITY_TITLE_FIELD = "id";

export const WorkCenterProductivityTitle = (
  record: TWorkCenterProductivity
): string => {
  return record.id?.toString() || String(record.id);
};
