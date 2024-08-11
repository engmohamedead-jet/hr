import { DoorType as TDoorType } from "../api/doorType/DoorType";

export const DOORTYPE_TITLE_FIELD = "name";

export const DoorTypeTitle = (record: TDoorType): string => {
  return record.name?.toString() || String(record.id);
};
