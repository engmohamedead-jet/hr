import { PressType as TPressType } from "../api/pressType/PressType";

export const PRESSTYPE_TITLE_FIELD = "name";

export const PressTypeTitle = (record: TPressType): string => {
  return record.name?.toString() || String(record.id);
};
