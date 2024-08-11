import { ElevatorUpdateManyWithoutDoorTypesInput } from "./ElevatorUpdateManyWithoutDoorTypesInput";

export type DoorTypeUpdateInput = {
  code?: string | null;
  description?: string | null;
  elevators?: ElevatorUpdateManyWithoutDoorTypesInput;
  name?: string;
  normalizedName?: string | null;
  notes?: string | null;
};
