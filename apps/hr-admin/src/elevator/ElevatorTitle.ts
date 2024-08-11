import { Elevator as TElevator } from "../api/elevator/Elevator";

export const ELEVATOR_TITLE_FIELD = "name";

export const ElevatorTitle = (record: TElevator): string => {
  return record.name?.toString() || String(record.id);
};
