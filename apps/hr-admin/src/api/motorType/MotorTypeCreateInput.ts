import { ElevatorCreateNestedManyWithoutMotorTypesInput } from "./ElevatorCreateNestedManyWithoutMotorTypesInput";

export type MotorTypeCreateInput = {
  code?: string | null;
  description?: string | null;
  elevators?: ElevatorCreateNestedManyWithoutMotorTypesInput;
  name: string;
  normalizedName?: string | null;
  notes?: string | null;
};
