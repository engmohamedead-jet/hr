import { WorkCenterTag as TWorkCenterTag } from "../api/workCenterTag/WorkCenterTag";

export const WORKCENTERTAG_TITLE_FIELD = "name";

export const WorkCenterTagTitle = (record: TWorkCenterTag): string => {
  return record.name?.toString() || String(record.id);
};
