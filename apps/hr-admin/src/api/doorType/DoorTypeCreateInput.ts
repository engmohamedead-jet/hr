import { ElevatorCreateNestedManyWithoutDoorTypesInput } from "./ElevatorCreateNestedManyWithoutDoorTypesInput";

export type DoorTypeCreateInput = {
  code?: string | null;
  description?: string | null;
  elevators?: ElevatorCreateNestedManyWithoutDoorTypesInput;
  name: string;
  normalizedName?: string | null;
  notes?: string | null;
};
