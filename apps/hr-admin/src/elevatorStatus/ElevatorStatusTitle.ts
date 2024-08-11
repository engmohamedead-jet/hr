import { ElevatorStatus as TElevatorStatus } from "../api/elevatorStatus/ElevatorStatus";

export const ELEVATORSTATUS_TITLE_FIELD = "name";

export const ElevatorStatusTitle = (record: TElevatorStatus): string => {
  return record.name?.toString() || String(record.id);
};
