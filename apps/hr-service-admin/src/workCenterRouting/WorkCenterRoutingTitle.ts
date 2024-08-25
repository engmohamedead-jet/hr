import { WorkCenterRouting as TWorkCenterRouting } from "../api/workCenterRouting/WorkCenterRouting";

export const WORKCENTERROUTING_TITLE_FIELD = "name";

export const WorkCenterRoutingTitle = (record: TWorkCenterRouting): string => {
  return record.name?.toString() || String(record.id);
};
