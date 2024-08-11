import { ElevatorSparePart as TElevatorSparePart } from "../api/elevatorSparePart/ElevatorSparePart";

export const ELEVATORSPAREPART_TITLE_FIELD = "id";

export const ElevatorSparePartTitle = (record: TElevatorSparePart): string => {
  return record.id?.toString() || String(record.id);
};
