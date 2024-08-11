import { ElevatorUpdateManyWithoutControlTypesInput } from "./ElevatorUpdateManyWithoutControlTypesInput";

export type ControlTypeUpdateInput = {
  code?: string | null;
  description?: string;
  elevators?: ElevatorUpdateManyWithoutControlTypesInput;
  isActive?: boolean | null;
  name?: string | null;
  note?: string | null;
  noted?: string | null;
};
