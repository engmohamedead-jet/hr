import { ElevatorUpdateManyWithoutMotorTypesInput } from "./ElevatorUpdateManyWithoutMotorTypesInput";

export type MotorTypeUpdateInput = {
  code?: string | null;
  description?: string | null;
  elevators?: ElevatorUpdateManyWithoutMotorTypesInput;
  name?: string;
  normalizedName?: string | null;
  notes?: string | null;
};
