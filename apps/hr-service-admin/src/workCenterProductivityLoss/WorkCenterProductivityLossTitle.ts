import { WorkCenterProductivityLoss as TWorkCenterProductivityLoss } from "../api/workCenterProductivityLoss/WorkCenterProductivityLoss";

export const WORKCENTERPRODUCTIVITYLOSS_TITLE_FIELD = "name";

export const WorkCenterProductivityLossTitle = (
  record: TWorkCenterProductivityLoss
): string => {
  return record.name?.toString() || String(record.id);
};
