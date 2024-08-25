import { WorkSheetType as TWorkSheetType } from "../api/workSheetType/WorkSheetType";

export const WORKSHEETTYPE_TITLE_FIELD = "name";

export const WorkSheetTypeTitle = (record: TWorkSheetType): string => {
  return record.name?.toString() || String(record.id);
};
