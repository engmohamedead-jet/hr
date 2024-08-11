import { ElevatorCreateNestedManyWithoutElevatorTypesInput } from "./ElevatorCreateNestedManyWithoutElevatorTypesInput";

export type ElevatorTypeCreateInput = {
  code?: string | null;
  description?: string | null;
  elevators?: ElevatorCreateNestedManyWithoutElevatorTypesInput;
  name: string;
  normalizedName: string;
  notes?: string | null;
};
