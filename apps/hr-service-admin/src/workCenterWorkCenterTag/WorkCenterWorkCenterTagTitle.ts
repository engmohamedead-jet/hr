import { WorkCenterWorkCenterTag as TWorkCenterWorkCenterTag } from "../api/workCenterWorkCenterTag/WorkCenterWorkCenterTag";

export const WORKCENTERWORKCENTERTAG_TITLE_FIELD = "id";

export const WorkCenterWorkCenterTagTitle = (
  record: TWorkCenterWorkCenterTag
): string => {
  return record.id?.toString() || String(record.id);
};
