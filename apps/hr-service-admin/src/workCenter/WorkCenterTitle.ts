import { WorkCenter as TWorkCenter } from "../api/workCenter/WorkCenter";

export const WORKCENTER_TITLE_FIELD = "name";

export const WorkCenterTitle = (record: TWorkCenter): string => {
  return record.name?.toString() || String(record.id);
};
