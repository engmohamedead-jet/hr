import { WorkCenterCapacity as TWorkCenterCapacity } from "../api/workCenterCapacity/WorkCenterCapacity";

export const WORKCENTERCAPACITY_TITLE_FIELD = "id";

export const WorkCenterCapacityTitle = (
  record: TWorkCenterCapacity
): string => {
  return record.id?.toString() || String(record.id);
};
