import { ControlType as TControlType } from "../api/controlType/ControlType";

export const CONTROLTYPE_TITLE_FIELD = "description";

export const ControlTypeTitle = (record: TControlType): string => {
  return record.description?.toString() || String(record.id);
};
