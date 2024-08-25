import { WorkCenterProductivityLossType as TWorkCenterProductivityLossType } from "../api/workCenterProductivityLossType/WorkCenterProductivityLossType";

export const WORKCENTERPRODUCTIVITYLOSSTYPE_TITLE_FIELD = "name";

export const WorkCenterProductivityLossTypeTitle = (
  record: TWorkCenterProductivityLossType
): string => {
  return record.name?.toString() || String(record.id);
};
