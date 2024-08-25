import { WorkCenterAlternative as TWorkCenterAlternative } from "../api/workCenterAlternative/WorkCenterAlternative";

export const WORKCENTERALTERNATIVE_TITLE_FIELD = "id";

export const WorkCenterAlternativeTitle = (
  record: TWorkCenterAlternative
): string => {
  return record.id?.toString() || String(record.id);
};
