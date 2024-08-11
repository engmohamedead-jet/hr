import { ElevatorType as TElevatorType } from "../api/elevatorType/ElevatorType";

export const ELEVATORTYPE_TITLE_FIELD = "name";

export const ElevatorTypeTitle = (record: TElevatorType): string => {
  return record.name?.toString() || String(record.id);
};
