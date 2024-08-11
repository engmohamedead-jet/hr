import { ElevatorUpdateManyWithoutElevatorTypesInput } from "./ElevatorUpdateManyWithoutElevatorTypesInput";

export type ElevatorTypeUpdateInput = {
  code?: string | null;
  description?: string | null;
  elevators?: ElevatorUpdateManyWithoutElevatorTypesInput;
  name?: string;
  normalizedName?: string;
  notes?: string | null;
};
